import { type FC } from 'react'
import { useQuery } from 'react-query'
import { type IMessageDTO, Message } from '@/entities/message'
import { Loader } from '@/shared/ui/loader'
import { ScrollContainer } from '@/shared/ui/scroll-container'
import { apiService, ApiServiceError } from '@/shared/services'

interface MessageHistoryProps {}
// TODO: lazy load by page, virtualization?
export const MessageHistory: FC<MessageHistoryProps> = () => {
  const { data, error, isLoading } = useQuery<IMessageDTO[], ApiServiceError>({
    queryKey: 'messages',
    queryFn: () => apiService.get('/message/all'),
  })

  const renderMessage = (message: IMessageDTO) => {
    return <Message key={message.id} message={message} isUserMessage={false} />
  }

  if (isLoading) return <Loader />

  if (error) {
    return <h3 className="text-destructive">{error.message}</h3>
  }

  if (data)
    return data.length > 0 ? (
      <ScrollContainer>
        <div className="flex flex-col gap-2">{data.map(renderMessage)}</div>
      </ScrollContainer>
    ) : (
      <div>No messages yet</div>
    )
  return <div>32</div>
}
