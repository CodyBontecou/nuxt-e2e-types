import { User } from '~/types/user'

export default defineEventHandler(() => {
  return { name: 'foo' } as User
})
