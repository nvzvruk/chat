import { type FC } from 'react'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { useSignUp } from '../hooks/useSignUp'

interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = () => {
  const {
    username,
    email,
    password,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useSignUp()

  return (
    <Card className="flex flex-col gap-4 m-auto max-w-md min-w-[320px] p-4">
      <h1 className="text-center text-xl">Create account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          value={username}
          onChange={handleNameChange}
          placeholder="Username"
        />
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
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
