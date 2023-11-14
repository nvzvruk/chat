import { Card } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { useLogin } from '../hooks/useLogin'

export const LoginForm = () => {
  const {
    username,
    password,
    handleNameChange,
    handlePasswordChange,
    handleSubmit,
  } = useLogin()

  return (
    <Card className="flex flex-col gap-4 m-auto max-w-md min-w-[320px] p-4">
      <h1 className="text-center text-xl">Log in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          value={username}
          onChange={handleNameChange}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}
