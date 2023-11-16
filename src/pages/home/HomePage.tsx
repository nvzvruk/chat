import { Header } from '@/widgets/Header'
import { AppLink } from '@/shared/ui/app-link'
import { useAccessToken } from '@/features/auth'

export const HomePage = () => {
  const { token } = useAccessToken()

  const content = token ? (
    <>
      Go to <AppLink path="/chat">chat</AppLink>
    </>
  ) : (
    <>
      <AppLink path="/login">Login</AppLink> if you have account or{' '}
      <AppLink path="/signup">Create</AppLink> one
    </>
  )

  return (
    <div className="flex flex-col gap-4 p-4 w-full h-full">
      <header className="w-full flex flex-col gap-4">
        <Header />
      </header>

      <div className="grow flex flex-col items-center justify-center gap-4 text-foreground">
        <h1 className="text-3xl">Nest.js and Postgres chat application</h1>
        <p className="text-xl">{content}</p>
      </div>
    </div>
  )
}

export default HomePage
