import Sidebar from '@components/sidebar'
import Header from '@components/header'
import Dashboard from '@components/dashboard'
import TableContainer from '@components/table-container'
import facialCleanser from '@icons/facial-cleanser.svg'
import { dashboardTh, products } from '../assets/constants/index'
import LayoutDoubleTable from '@components/layout-doble-table'

//useState para receber os produtos
//useEfect para consultar a api
//Verificar atributo
const Home = () => (
  <>
    <Header />
    <Sidebar />
    <Dashboard />
    <LayoutDoubleTable>
      <TableContainer image={facialCleanser} th={dashboardTh} td={products} />
      <TableContainer image={facialCleanser} th={dashboardTh} td={products} />
    </LayoutDoubleTable>
  </>
)

export default Home
