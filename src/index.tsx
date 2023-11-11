import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const rootElement = document.getElementById('app')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
