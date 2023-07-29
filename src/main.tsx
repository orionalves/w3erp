import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@routes/index.tsx'
import { GlobalStyle } from '@styles/global-style'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />

    <RouterProvider router={router} />
  </React.StrictMode>
)
