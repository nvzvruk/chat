import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { SendMessage } from '@/modules/send-message'
import { UserAvatar } from '@/entities/user'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { MessageHistory } from '@/modules/message-history'
import { SearchUsers } from '@/modules/search-users'

export const ChatPage = () => {
  const currentUser = {
    id: '1o2',
    firstName: 'Name',
    lastName: 'Surname',
    avatarSrc: undefined,
  }

  return (
    <div className="w-full h-full flex gap-4 p-4">
      <aside className="w-2/5">
        <Card className="flex h-full rounded-2xl text-white">
          <div className="flex flex-col p-6 bg-primary rounded-bl-2xl rounded-tl-2xl">
            a
          </div>
          <div className="flex flex-col py-4 grow">
            <SearchUsers />
          </div>
        </Card>
      </aside>
      <div className="w-full flex flex-col gap-4">
        <header>
          <Card className="flex items-center justify-between gap-4 p-4">
            <div className="flex gap-4 items-center">
              <UserAvatar user={currentUser} />
              <span>
                {currentUser.firstName} {currentUser.lastName}
              </span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <MagnifyingGlassIcon className="w-4 fill-foreground" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bars3Icon className="w-4 fill-foreground" />
              </Button>
            </div>
          </Card>
        </header>
        <main className="grow overflow-hidden">
          <MessageHistory />
        </main>
        <footer>
          <SendMessage />
        </footer>
      </div>
    </div>
  )
}

export default ChatPage
