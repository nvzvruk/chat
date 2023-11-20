interface MessageSender {
  id: string
  name: string
  avatarSrc?: string
}

export interface MessageDto {
  id: string
  text: string
  createdAt: string
  updatedAt: string
  sender: MessageSender
}
