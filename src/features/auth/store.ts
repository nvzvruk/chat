import { create } from 'zustand'
import { User } from '@/entities/user'

interface AuthState {
  user: User | null
  setUser: (userData: User) => void
  resetUser: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  resetUser: () => set({ user: null }),
}))

export const isAuthenticatedSelector = (state: AuthState) => Boolean(state.user)
