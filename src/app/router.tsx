import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChatPage } from '@/pages/chat'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatPage />,
  },
])

export const AppRouter = () => <RouterProvider router={router} />
