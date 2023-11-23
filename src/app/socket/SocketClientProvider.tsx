import { ReactNode, useEffect } from 'react'
import {
  SocketConnectionContext,
  EventEmitter,
  EventListener,
} from '@/shared/context'
import { socket } from './socket'

export const SocketClientProvider = ({ children }: { children: ReactNode }) => {
  const emitEvent: EventEmitter = (event, payload) => {
    socket.emit(event, payload)
  }

  const addEventListener: EventListener = (event, handler) => {
    socket.on(event, handler)
  }

  const removeEventListener: EventListener = (event, handler) => {
    socket.off(event, handler)
  }

  useEffect(() => {
    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])

  const contextValue = {
    addEventListener,
    removeEventListener,
    emitEvent,
  }

  return (
    <SocketConnectionContext.Provider value={contextValue}>
      {children}
    </SocketConnectionContext.Provider>
  )
}
