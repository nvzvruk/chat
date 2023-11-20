import { SendMessage } from '@/features/send-message'
import { MessageHistory } from '@/features/message-history'
import { PageLayout } from '@/widgets/PageLayout'

export const ChatPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4 grow">
        <MessageHistory />
        <footer>
          <SendMessage />
        </footer>
      </div>
    </PageLayout>
  )
}

export default ChatPage
