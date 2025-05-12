import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
 import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/Authprovider.jsx'
import { QueryClientProvider,QueryClient } from 'react-query'
const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>,
  </AuthProvider>
)
