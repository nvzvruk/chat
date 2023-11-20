import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from '@/app'
import { ChatProvider } from '@/app/ChatProvider'
import { ThemeProvider } from '@/features/theme'
const rootElement = document.getElementById('app')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ThemeProvider>
  </QueryClientProvider>
)
