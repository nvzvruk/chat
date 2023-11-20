import { createContext, useContext } from 'react'
import { MessageDto } from '@/entities/message'

export interface ContextValue {
  messages?: MessageDto[]
  sendMessage: (text: string) => void
  requestMessages: () => void
}

export const ChatContext = createContext<ContextValue>({
  messages: [],
  sendMessage: () => {},
  requestMessages: () => {},
})

export const useChat = () => {
  const { messages, sendMessage, requestMessages } = useContext(ChatContext)

  return { messages, sendMessage, requestMessages }
}
