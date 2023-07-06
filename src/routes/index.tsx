import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import Home from '@pages/home'
import Predictions from '@pages/predictions'
import Products from '@pages/products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
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
])

export default router
