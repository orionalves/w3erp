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

//useState para receber os produtos
//useEfect para consultar a api
//Verificar atributo
const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
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
    </>
  )
}

export default Home
