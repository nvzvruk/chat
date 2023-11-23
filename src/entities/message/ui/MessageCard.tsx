import { type FC } from 'react'
import { Card } from '@/shared/ui/card'
import { cn } from '@/shared/helpers'
import { type MessageDto } from '../type'
import { UserAvatar } from '@/entities/user'

interface MessageProps {
  message: MessageDto
  isUserMessage: boolean
}

export const MessageCard: FC<MessageProps> = ({ message, isUserMessage }) => (
  <div
    className={cn(
      'flex gap-2 w-full items-end justify-end text-foreground',
      !isUserMessage && 'flex-row-reverse'
    )}
  >
    <Card
      className={cn(
        'flex gap-4 relative shadow-none max-w-2/5',
        isUserMessage
          ? 'bg-primary text-white rounded-br-none'
          : 'rounded-bl-none'
      )}
    >
      <p className="p-4">{message.text}</p>
    </Card>
    <UserAvatar username={message.sender.name} />
  </div>
)
