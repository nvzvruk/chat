import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import { Button } from '@/shared/ui/button'
import { useLogout } from '../hooks/useLogout'

export const LogoutButton = () => {
  const logout = useLogout()

  const onButtonClick = () => {
    logout()
  }

  return (
    <Button className="rounded-none" variant="ghost" onClick={onButtonClick}>
      <ArrowLeftOnRectangleIcon className="w-4 h-4" />
    </Button>
  )
}
