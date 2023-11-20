import { ReactNode, useEffect, useState } from 'react'
import { useCurrentUser } from '@/features/auth'
import { MessageDto } from '@/entities/message'
import { ConnectionContext } from '@/shared/context'
import { socket } from './socket'

export const SocketClientProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<MessageDto[]>([])
  const { user } = useCurrentUser()

  const handleReceiveMessage = (message: MessageDto) => {
    setMessages((currentMessages) => [...currentMessages, message])
  }

  const handleReceiveAllMessages = (messages: MessageDto[]) => {
    setMessages(messages)
  }

  const sendMessage = (text: string) => {
    socket.emit('send_message', {
      text: text,
      userId: user?.id,
    })
  }

  const requestMessages = () => {
    socket.emit('request_all_messages')
  }

  useEffect(() => {
    socket.connect()
    socket.on('receive_message', handleReceiveMessage)
    socket.on('receive_all_messages', handleReceiveAllMessages)

    return () => {
      socket.off('receive_message', handleReceiveMessage)
      socket.off('receive_all_messages', handleReceiveAllMessages)
      console.log('disconnect')
      socket.disconnect()
    }
  }, [])

  const contextValue = {
    messages,
    sendMessage,
    requestMessages,
  }

  return (
    <ConnectionContext.Provider value={contextValue}>
      {children}
    </ConnectionContext.Provider>
  )
}
