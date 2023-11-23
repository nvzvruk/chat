import { useCallback, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { MessageCard, MessageDto } from '@/entities/message'
import { Loader } from '@/shared/ui/loader'
import { ErrorPlaceholder } from '@/shared/ui/error'
import { apiService, ApiServiceError } from '@/shared/services'
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso'
import { useSocketConnection } from '@/shared/context'
import { useCurrentUser } from '@/features/auth'
import { EmptyMassagesPlaceholder } from '@/features/message-history/ui/EmptyMassagesPlaceholder'

interface GetMessageResponse {
  messages: MessageDto[]
  hasNext: boolean
  total: number
}

const pageSize = 20

export function MessageHistory() {
  const [hasUnread, setHasUnread] = useState(false)
  const [pageToLoad, setPageToLoad] = useState(1)
  const virtuosoRef = useRef<VirtuosoHandle>(null)
  const { currentUser } = useCurrentUser()
  const [scrollToNew, setScrollToNew] = useState(false)
  const { addEventListener, removeEventListener } = useSocketConnection()

  const [firstItemIndex, setFirstItemIndex] = useState(10000)
  const [messages, setMessages] = useState<MessageDto[] | null>(null)

  const { error, isLoading } = useQuery<GetMessageResponse, ApiServiceError>({
    queryKey: ['messages', pageToLoad],
    queryFn: () =>
      apiService.get(
        `/message/history?pageSize=${pageSize}&pageNumber=${pageToLoad}`
      ),
    onSuccess: ({ messages, hasNext }) => {
      setMessages((prevState) => [...messages, ...(prevState || [])])
      if (hasNext) {
        setFirstItemIndex((prevState) => prevState - pageSize + 1)
      }
    },
  })

  if (error) return <ErrorPlaceholder message={error.message} />

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

  const startReached = () => {
    setScrollToNew(false)
    setPageToLoad((prevState) => prevState + 1)
  }

  const handleReceiveMessage = (message: MessageDto) => {
    if (message.sender.id === currentUser?.id) {
      virtuosoRef.current?.scrollToIndex({
        index: 'LAST',
        behavior: 'smooth',
      })
    } else {
      setHasUnread(true)
    }

    setMessages((prevState) => [...(prevState || []), message])
  }

  const followOutput = (isAtBottom: boolean) => {
    if (isAtBottom) {
      return 'smooth'
    }

    return false
  }

  const endReached = () => {
    setHasUnread(false)
  }

  useEffect(() => {
    addEventListener('receive_message', handleReceiveMessage)
    return () => {
      removeEventListener('receive_message', handleReceiveMessage)
    }
  }, [handleReceiveMessage])

  if (messages) {
    return (
      <div className="w-full h-full relative">
        <Virtuoso
          endReached={endReached}
          ref={virtuosoRef}
          followOutput={followOutput}
          firstItemIndex={firstItemIndex}
          initialTopMostItemIndex={messages.length}
          data={messages}
          startReached={startReached}
          itemContent={renderMessage}
          components={{
            Header: () => isLoading && <Loader autoSize={true} />,
            EmptyPlaceholder: EmptyMassagesPlaceholder,
          }}
        />
        {hasUnread && (
          <div
            onClick={() => {
              setFirstItemIndex(1)
            }}
            className="py-1 px-2 text-sm text-muted-foreground bg-input rounded-xl absolute bottom-0 left-[50%] -translate-x-[50%]"
          >
            new messages
          </div>
        )}
      </div>
    )
  }

  if (isLoading) return <Loader />
}
