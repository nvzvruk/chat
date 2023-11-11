import { type IMessageDTO } from '@/entities/message'

export const getMessages = async (): Promise<IMessageDTO[]> => {
  const response = await fetch('http://localhost:3002/message/all', {
    headers: {
      Authorization:
        'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbWUiLCJzdWIiOjE3LCJpYXQiOjE2OTk3MDI2MzIsImV4cCI6MTY5OTcwNjIzMn0.ub9msJ6s1rZF0oZhYbDjHLIjnS_K-b9JUGty_0ZWars',
    },
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
