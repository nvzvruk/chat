import { type FC, useEffect } from 'react'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { type MessageDto, MessageCard } from '@/entities/message'
import { ScrollContainer } from '@/shared/ui/scroll-container'
import { useConnection } from '@/shared/context'
import { useCurrentUser } from '@/features/auth'

interface MessageHistoryProps {}
// TODO: lazy load by page, virtualization?
export const MessageHistory: FC<MessageHistoryProps> = () => {
  // TODO get messages using REST
  const { messages, requestMessages } = useConnection()
  const { user } = useCurrentUser()

  const renderMessage = (message: MessageDto) => {
    return (
      <MessageCard
        key={message.id}
        message={message}
        isUserMessage={message.sender.id === user?.id}
      />
    )
  }

  useEffect(() => {
    requestMessages()
  }, [])

  if (messages)
    return messages.length > 0 ? (
      <ScrollContainer>
        <div className="flex flex-col gap-2">{messages.map(renderMessage)}</div>
      </ScrollContainer>
    ) : (
      <div className="h-full flex flex-col items-center justify-center gap-4 text-foreground">
        <ChatBubbleBottomCenterIcon className="w-10" />
        <p className="text-xl">No messages yet</p>
      </div>
    )
  return <div>32</div>
}
