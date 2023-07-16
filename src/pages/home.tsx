import Sidebar from '@components/sidebar'
import Header from '@components/header'
import Dashboard from '@components/dashboard'
import TableContainer from '@components/table-container'
import LayoutDoubleTable from '@components/layout-double-table'
import facialCleanser from '@icons/facial-cleanser-blue.svg'
import people from '@icons/every-user.svg'
import { color } from '@styles/constants'
import {
  productsTh,
  customersTh,
  products,
  customers
} from '../assets/constants/index'
import LayoutPage from '@components/layout-page'
import { useContext } from 'react'
import { LoginContext } from '@context/login-context'

//useState para receber os produtos
//useEfect para consultar a api
//Verificar atributo
const Home = () => {
  const { localStorageState } = useContext(LoginContext)

  return (
    <>
      <Header token={localStorageState !== null ? localStorageState : ''} />
      <Sidebar />
      <LayoutPage>
        <Dashboard />
        <LayoutDoubleTable>
          <TableContainer
            color={color.primaryBlue4}
            image={facialCleanser}
            th={productsTh}
            td={products}
          />
          <TableContainer
            color={color.primary}
            image={people}
            th={customersTh}
            td={customers}
          />
        </LayoutDoubleTable>
      </LayoutPage>
    </>
  )
}

export default Home
