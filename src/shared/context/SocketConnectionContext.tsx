import { createContext, useContext, ContextType } from 'react'

export type ClientEvent = 'send_message'
export type ServerEvent = 'receive_message'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EventHandler = (...args: any[]) => void
export type EventListener = (event: ServerEvent, handler: EventHandler) => void
export type EventEmitter = <T>(event: ClientEvent, payload: T) => void

export const SocketConnectionContext = createContext<{
  addEventListener: EventListener
  removeEventListener: EventListener
  emitEvent: EventEmitter
}>({
  removeEventListener: () => {},
  addEventListener: () => {},
  emitEvent: () => {},
})

export const useSocketConnection = (): ContextType<
  typeof SocketConnectionContext
> => {
  return useContext(SocketConnectionContext)
}
