import { type FC } from 'react'
import { Card } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ToggleThemeMode } from '@/features/theme'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="w-full">
      <Card className="flex items-center justify-between gap-4 p-4">
        <div className="flex gap-4 items-center">
          <ToggleThemeMode />
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
  )
}
