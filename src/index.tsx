import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from '@/app'
import { ThemeProvider } from '@/features/theme'

const rootElement = document.getElementById('app')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
)
