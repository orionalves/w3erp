import Sidebar from '@components/sidebar'
import Header from '@components/header'
import Dashboard from '@components/dashboard'
import TableContainer from '@components/table-container'
import facialCleanser from '@icons/facial-cleanser.svg'
import { dashboardTh, products } from '../assets/constants/index'

const Home = () => (
  <>
    <Header />
    <Sidebar />
    <Dashboard />
    <div>
      <TableContainer image={facialCleanser} th={dashboardTh} td={products} />
    </div>
  </>
)

export default Home
