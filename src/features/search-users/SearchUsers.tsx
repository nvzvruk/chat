import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { UserDto, UserList } from '@/entities/user'
import { Loader } from '@/shared/ui/loader'
import { Input } from '@/shared/ui/input'
import { useDebounce } from '@/shared/hooks'
import { apiService, ApiServiceError } from '@/shared/services'

export const SearchUsers = () => {
  const [query, setQuery] = useState('')

  const { data, error, isLoading } = useQuery<UserDto[], ApiServiceError>({
    queryKey: 'users',
    queryFn: () => apiService.get('/user/all'),
  })

  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="px-4">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute right-3 top-[50%] -translate-y-[50%] w-4 fill-foreground pointer-events-none" />
          <Input
            placeholder="Search users..."
            onChange={useDebounce(handleSearchChange, 500)}
          />
        </div>
      </div>
      {data && <UserList users={data} />}
      {isLoading && <Loader />}
      {error && <span className="text-destructive">{error.message}</span>}
    </div>
  )
}
