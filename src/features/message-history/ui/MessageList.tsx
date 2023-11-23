import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import { Virtuoso, VirtuosoHandle, ListRange } from 'react-virtuoso'
import { useCurrentUser } from '@/features/auth'
import { MessageCard, MessageDto } from '@/entities/message'
import { Loader } from '@/shared/ui/loader'
import { useSocketConnection } from '@/shared/context'
import { EmptyMassagesPlaceholder } from './EmptyMassagesPlaceholder'

interface MessageListProps {
  messages: MessageDto[]
  onTopReached: () => void
  onReceiveNew: (message: MessageDto) => void
  isLoading: boolean
}

export const MessageList: FC<MessageListProps> = ({
  messages,
  isLoading,
  onTopReached,
  onReceiveNew,
}) => {
  const { addEventListener, removeEventListener } = useSocketConnection()
  const virtuosoRef = useRef<VirtuosoHandle>(null)
  const [hasUnread, setHasUnread] = useState(false)
  const { currentUser } = useCurrentUser()

  const handleReceiveMessage = (message: MessageDto) => {
    onReceiveNew(message)

    if (message.sender.id === currentUser?.id) {
      virtuosoRef.current?.scrollToIndex(messages.length + 1)
    } else {
      setHasUnread(true)
    }
  }

  useEffect(() => {
    addEventListener('receive_message', handleReceiveMessage)
    return () => removeEventListener('receive_message', handleReceiveMessage)
  }, [messages])

  const handleRangeChange = ({ startIndex }: ListRange) => {
    if (startIndex === 0) {
      onTopReached()
      virtuosoRef.current?.scrollToIndex(messages.length + 1)
    }
  }

  // @ts-ignore
  const renderMessage = (_, message: MessageDto) => (
    <div className="py-2">
      <MessageCard
        key={`message-${message.id}`}
        message={message}
        isUserMessage={message.sender.id === currentUser?.id}
      />
    </div>
  )

  return (
    <div className="w-full h-full relative">
      <Virtuoso
        rangeChanged={handleRangeChange}
        ref={virtuosoRef}
        data={messages}
        itemContent={renderMessage}
        initialTopMostItemIndex={messages.length}
        followOutput={(isAtBottom: boolean) => isAtBottom && 'smooth'}
        components={{
          Header: () => isLoading && <Loader autoSize={true} />,
          EmptyPlaceholder: EmptyMassagesPlaceholder,
        }}
      />
      {hasUnread && (
        <div className="py-1 px-2 text-sm text-muted-foreground bg-input rounded-xl absolute bottom-0 left-[50%] -translate-x-[50%]">
          new messages
        </div>
      )}
    </div>
  )
}
