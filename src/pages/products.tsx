import Sidebar from '@components/sidebar'
import Header from '@components/header'
import LayoutPage from '@components/layout-page'
import { color } from '@styles/constants'
import Title from '@components/title'
import { useContext } from 'react'
import { LoginContext } from '@context/login-context'
import ProductContainer from '@components/product-container'
import { tableProductsPage } from '../assets/constants/index'

const Products = () => {
  const { localStorageState } = useContext(LoginContext)

  return (
    <>
      <Header token={localStorageState !== null ? localStorageState : ''} />
      <LayoutPage>
        <Title title="Produtos" color={color.gray900} />
        <ProductContainer td={tableProductsPage} />
      </LayoutPage>
      <Sidebar />
    </>
  )
}

export default Products
