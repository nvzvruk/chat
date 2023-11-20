import { type FC, useMemo } from 'react'
import { Card } from '@/shared/ui/card'
import { cn } from '@/shared/helpers'
import { type MessageDto } from '../type'
import { UserAvatar } from '@/entities/user'

interface MessageProps {
  message: MessageDto
  isUserMessage: boolean
}

export const MessageCard: FC<MessageProps> = ({ message, isUserMessage }) => {
  const { text, createdAt } = message

  const displayDate = useMemo(() => {
    const date = new Date(createdAt)

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  }, [createdAt])

  return (
    <div
      className={cn(
        'flex gap-2 w-full items-end justify-end text-foreground',
        !isUserMessage && 'flex-row-reverse'
      )}
    >
      <Card
        className={cn(
          'flex gap-4 relative w-auto shadow-none',
          isUserMessage
            ? 'bg-primary text-white rounded-br-none'
            : 'rounded-bl-none'
        )}
      >
        <p className="p-4">{text}</p>
      </Card>
      <UserAvatar username={message.sender.name} />
    </div>
  )
}
