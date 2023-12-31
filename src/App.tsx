import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { Outlet } from 'react-router-dom'
import Header from '@components/header'
import Sidebar from '@components/sidebar'
import { loginName } from '@services/login'

function App() {
  const [data, setData] = useState<Me | null>(null)
  const { localStorageState } = useContext(LoginContext)

  useEffect(() => {
    if (!localStorageState) {
      return
    }
    const fetchLoginName = async () => {
      try {
        const result = await loginName(localStorageState)
        setData(result)
      } catch (event) {
        if (event instanceof Error) {
          window.alert('Por favor, faça o login novamente.')
        }
      }
    }

    fetchLoginName()
  }, [localStorageState])

  return (
    <>
      <Header name={data?.nome} email={data?.email} />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
