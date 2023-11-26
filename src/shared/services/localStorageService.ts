interface LocalStorageService {
  setItem<T>(key: string, value: T): void
  getItem<T>(key: string): T | null
  removeItem(key: string): void
}

export const localStorageService: LocalStorageService = {
  setItem: (key, value) => {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },

  getItem: (key) => {
    try {
      const serializedValue = localStorage.getItem(key)
      if (serializedValue === null) {
        return null
      }
      return JSON.parse(serializedValue)
    } catch (error) {
      console.error('Error getting from localStorage:', error)
      return null
    }
  },

  removeItem: (key) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  },
}
