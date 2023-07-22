import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import Home from '@pages/home'
import Predictions from '@pages/predictions'
import Products from '@pages/products'
import Login from '@pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/predictions',
        element: <Predictions />
      },
      {
        path: '/products',
        element: <Products />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
    index: true
  }
])

export default router
