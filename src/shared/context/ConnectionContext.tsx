import { createContext, useContext } from 'react'
import { MessageDto } from '@/entities/message'

export interface ContextValue {
  messages?: MessageDto[]
  sendMessage: (text: string) => void
  requestMessages: () => void
}

export const ConnectionContext = createContext<ContextValue>({
  messages: [],
  sendMessage: () => {},
  requestMessages: () => {},
})

export const useConnection = () => {
  const { messages, sendMessage, requestMessages } =
    useContext(ConnectionContext)

  return { messages, sendMessage, requestMessages }
}
