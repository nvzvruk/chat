import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function compose<T extends () => void>(...callbacks: T[]) {
  callbacks.forEach((cb) => {
    cb()
  })
}
