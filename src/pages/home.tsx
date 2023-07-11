import Sidebar from '@components/sidebar'
import Header from '@components/header'
import Dashboard from '@components/dashboard'
import TableContainer from '@components/table-container'
import LayoutDoubleTable from '@components/layout-doble-table'
import facialCleanser from '@icons/facial-cleanser.svg'
import people from '@icons/every-user.svg'
import {
  productsTh,
  customersTh,
  products,
  customers
} from '../assets/constants/index'

//useState para receber os produtos
//useEfect para consultar a api
//Verificar atributo
const Home = () => (
  <>
    <Header />
    <Sidebar />
    <Dashboard />
    <LayoutDoubleTable>
      <TableContainer image={facialCleanser} th={productsTh} td={products} />
      <TableContainer image={people} th={customersTh} td={customers} />
    </LayoutDoubleTable>
  </>
)

export default Home
