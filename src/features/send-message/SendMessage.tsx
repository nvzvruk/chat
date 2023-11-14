import { type FC, useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'

interface SendMessageProps {}

export const SendMessage: FC<SendMessageProps> = () => {
  const [message, setMessage] = useState('')
  const connection = {
    sendMessage: (message: string, to: string) =>
      console.log(`Message sent to ${to}: ${message} `),
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value)
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()

    if (message.length > 0) {
      connection.sendMessage(message, 'Stepan')
    }
  }

  return (
    <Card>
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-between gap-4 p-4"
      >
        <Input
          value={message}
          onChange={handleInputChange}
          placeholder="Type messege..."
          className="grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </Card>
  )
}
