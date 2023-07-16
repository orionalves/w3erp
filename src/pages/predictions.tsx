import Sidebar from '@components/sidebar'
import Header from '@components/header'
import LayoutPage from '@components/layout-page'
import Title from '@components/title'
import { color } from '@styles/constants'
import { useContext } from 'react'
import { LoginContext } from '@context/login-context'
import Search from '@components/search'
import DivSearch from '@components/div-search'

const Predictions = () => {
  const { localStorageState } = useContext(LoginContext)

  return (
    <>
      <Header token={localStorageState !== null ? localStorageState : ''} />
      <LayoutPage>
        <Title title="Predições" color={color.gray900} />
        <DivSearch>
          <Search />
        </DivSearch>
        <div></div>
      </LayoutPage>
      <Sidebar />
    </>
  )
}

export default Predictions
