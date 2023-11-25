import { AppLink } from '@/shared/ui/app-link'
import { useAuthenticatedUser } from '@/features/auth'
import { PageLayout } from '@/widgets/PageLayout'

export const HomePage = () => {
  const { isLoggedIn } = useAuthenticatedUser()

  return (
    <PageLayout>
      <div className="grow flex flex-col items-center justify-center gap-4 text-foreground">
        <h1 className="text-3xl">Nest.js and Postgres chat application</h1>
        {!isLoggedIn && (
          <p className="text-xl">
            <AppLink path="/login">Login</AppLink> if you have account or{' '}
            <AppLink path="/signup">Create</AppLink> one
          </p>
        )}
      </div>
    </PageLayout>
  )
}

export default HomePage
