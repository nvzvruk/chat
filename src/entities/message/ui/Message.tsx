import { type FC, useMemo } from 'react'
import { Card } from '@/shared/ui/card'
import { cn } from '@/shared/helpers'
import { type IMessageDTO } from '../type'

interface MessageProps {
  message: IMessageDTO
  isUserMessage: boolean
}

export const Message: FC<MessageProps> = ({ message, isUserMessage }) => {
  const { text, createdAt } = message

  const displayDate = useMemo(() => {
    const date = new Date(createdAt)

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
  }, [createdAt])

  return (
    <div className={cn('flex flex-col gap-2', isUserMessage && 'items-end')}>
      <Card
        className={cn(
          'flex items-end gap-4 relative w-auto shadow-none',
          isUserMessage && 'bg-primary rounded-br-none'
        )}
      >
        <p className="p-4">{text}</p>
      </Card>
      <span>{displayDate}</span>
    </div>
  )
}
