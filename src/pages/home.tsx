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
  // dashboardCards
} from '../assets/constants/index'
import LayoutPage from '@components/layout-page'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
// import { getProducts } from '@services/products'
import { getDashboard } from '@services/dashboard'
import { useNavigate } from 'react-router-dom'
//useState para receber os produtos
//useEfect para consultar a api
//Verificar atributo
const Home = () => {
  const [dashboardCards, setDashboardCards] = useState<
    Partial<DashboardCardApi>
  >({})
  const { localStorageState } = useContext(LoginContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorageState) {
      navigate('/login')
      return
    }
    const fetchLoginName = async () => {
      try {
        const result = await getDashboard(localStorageState)
        setDashboardCards(result)
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchLoginName()
  }, [localStorageState, navigate])

  return (
    <>
      <Header token={localStorageState} />
      <Sidebar />
      <LayoutPage>
        <Dashboard {...dashboardCards} />
        <LayoutDoubleTable>
          <TableContainer
            title="Produtos"
            color={color.primaryBlue4}
            image={facialCleanser}
            th={productsTh}
            td={products}
          />
          <TableContainer
            title="Clientes"
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
