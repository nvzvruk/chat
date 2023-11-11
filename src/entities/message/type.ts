interface MessageSender {
  id: string
  name: string
  avatarSrc?: string
}

export interface IMessage<T = string> {
  id: string
  text: string
  createdAt: string
  updatedAt: string
  sender: T
}

export type IMessageDTO = IMessage<MessageSender>
