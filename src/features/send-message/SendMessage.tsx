import { type FC, memo, useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { useSocketConnection } from '@/shared/context'
import { useAuthenticatedUser } from '@/features/auth'

interface SendMessageProps {}

export const SendMessage: FC<SendMessageProps> = memo(() => {
  const [text, setText] = useState('')
  const { emitEvent } = useSocketConnection()
  const { user } = useAuthenticatedUser()

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()

    if (text.trim().length > 0) {
      emitEvent('send_message', {
        text,
        userId: user?.id,
      })
      setText('')
    }
  }

  return (
    <Card>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-between gap-4 p-4"
      >
        <Input
          value={text}
          onChange={handleInputChange}
          placeholder="Type messege..."
          className="grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </Card>
  )
})
