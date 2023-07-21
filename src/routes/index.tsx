import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import Home from '@pages/home'
import Predictions from '@pages/predictions'
import Products from '@pages/products'
import Login from '@pages/login'
import App from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />
      },
      {
        path: '/login',
        element: <Login />
      },
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
  }
])

export default router
