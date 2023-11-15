import { SendMessage } from '@/features/send-message'
import { MessageHistory } from '@/features/message-history'
import { SearchUsers } from '@/features/search-users'
import { PageLayout } from '@/widgets/PageLayout'

export const ChatPage = () => {
  return (
    <PageLayout sidebarContent={<SearchUsers />}>
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
