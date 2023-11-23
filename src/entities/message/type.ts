interface MessageSender {
  id: string
  name: string
}

export interface MessageDto {
  id: string
  text: string
  createdAt: string
  updatedAt: string
  sender: MessageSender
}
