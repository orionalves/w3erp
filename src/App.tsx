import { GlobalStyle } from './styles/global-style'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { Outlet } from 'react-router-dom'
import Header from '@components/header'
import Sidebar from '@components/sidebar'
import { loginName } from '@services/login'

function App() {
  const [data, setData] = useState<Me | null>(null)
  const { localStorageState, setLocalStorageState } = useContext(LoginContext)

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
          window.alert(event.message)
        }
      }
    }

    fetchLoginName()
  }, [localStorageState, setLocalStorageState])

  return (
    <>
      <GlobalStyle />
      <Header name={data?.nome} email={data?.email} />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default App
