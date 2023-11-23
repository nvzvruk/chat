import { createContext, useContext, ContextType } from 'react'

export type ClientEvent = 'send_message'
export type ServerEvent = 'receive_message'

export type EventHandler = (arg: any) => void
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
