import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import Home from '@pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  //   errorElement: <ErrorPage />
  // },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />
  }
  // {
  //   path: '/login',
  //   element: <Login />,
  //   errorElement: <ErrorPage />
  // },
  // {
  //   path: '/home',
  //   element: <Home />,
  //   errorElement: <ErrorPage />
  // }
])

export default router
