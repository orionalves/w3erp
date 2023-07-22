import Dashboard from '@components/dashboard'
import LayoutDoubleTable from '@components/layout-double-table'
import LayoutPage from '@components/layout-page'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { getDashboard } from '@services/dashboard'
// import { useNavigate } from 'react-router-dom'
import TableDashboard from '@components/table-dashboard'
import { getProductsCustomers } from '@services/productsCustomers'

const Home = () => {
  const [dashboardCards, setDashboardCards] = useState<
    Partial<DashboardCardApi>
  >({})
  const [products, setProducts] = useState<Partial<ProductsCustomersData>>([])
  const [productsUpDown, setProductsUpDown] = useState<UpDownType>('EM_ALTA')
  const [customers, setCustomers] = useState<Partial<ProductsCustomersData>>([])
  const [customersUpDown, setCustomersUpDown] = useState<UpDownType>('EM_ALTA')
  const { localStorageState, setLocalStorageState } = useContext(LoginContext)

  // const navigate = useNavigate()
  useEffect(() => {
    setLocalStorageState(localStorage.getItem('TOKEN'))
    if (!localStorageState) {
      // navigate('/login')
      return
    }
    const fetchApi = async () => {
      try {
        const resultDashboard = await getDashboard(localStorageState)
        const resultProducts = await getProductsCustomers(
          localStorageState,
          productsUpDown,
          'produtos'
        )
        const resultCustomers = await getProductsCustomers(
          localStorageState,
          customersUpDown,
          'clientes'
        )
        setProducts(resultProducts)
        setCustomers(resultCustomers)
        setDashboardCards(resultDashboard)
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchApi()
  }, [
    customersUpDown,
    localStorageState,
    // navigate,
    productsUpDown,
    setLocalStorageState
  ])
  // if(!dashboardCards){
  //   return <> </>
  // }
  return (
    <>
      <LayoutPage>
        <Dashboard {...dashboardCards} />
        <LayoutDoubleTable>
          <TableDashboard
            title="Produtos"
            apiResult={products}
            upDown={productsUpDown}
            setUpDown={setProductsUpDown}
          />
          <TableDashboard
            title="Clientes"
            apiResult={customers}
            upDown={customersUpDown}
            setUpDown={setCustomersUpDown}
          />
        </LayoutDoubleTable>
      </LayoutPage>
    </>
  )
}

export default Home
