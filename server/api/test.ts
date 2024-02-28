import type { User } from '~/types/user'

export default defineEventHandler(() => {
  return { test: '0' } as User
})
  