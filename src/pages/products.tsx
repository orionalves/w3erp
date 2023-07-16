import Sidebar from '@components/sidebar'
import Header from '@components/header'
import LayoutPage from '@components/layout-page'
import { color } from '@styles/constants'
import Title from '@components/title'
import { useContext } from 'react'
import { LoginContext } from '@context/login-context'

const Products = () => {
  const { localStorageState } = useContext(LoginContext)

  return (
    <>
      <Header token={localStorageState !== null ? localStorageState : ''} />
      <LayoutPage>
        <Title title="Produtos" color={color.gray900} />
        <div></div>
      </LayoutPage>
      <Sidebar />
    </>
  )
}

export default Products
