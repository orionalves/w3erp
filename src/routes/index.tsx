import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import ErrorPage from './error-page'
import Home from '@pages/home'
import Predictions from '@pages/predictions'
import Products from '@pages/products'
import Login from '@pages/login'
import ProductDetails from '@pages/product-details'
import PredictionDetails from '@pages/prediction-details'
import CustomerDetails from '@pages/customer-details'

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
      },
      {
        path: '/productdetails/:id',
        element: <ProductDetails />
      },
      {
        path: '/customerdetails/:id',
        element: <CustomerDetails />
      },
      {
        path: '/predictiondetails/:id',
        element: <PredictionDetails />
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
