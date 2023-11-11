import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { SendMessage } from '@/modules/send-message'
import { UserAvatar } from '@/entities/user'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { MessageHistory } from '@/modules/message-history'

const currentUser = {
  id: 'string',
  firstName: 'string',
  lastName: 'string',
}

export const LoginPage = () => {
  return (
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
  )
}

export default LoginPage
