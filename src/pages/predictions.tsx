import Sidebar from '@components/sidebar'
import Header from '@components/header'
import LayoutPage from '@components/layout-page'
import Title from '@components/title'
import { color } from '@styles/constants'
import { useContext } from 'react'
import { LoginContext } from '@context/login-context'
import Search from '@components/search'
import ContainerSearch from '@components/container-search'
import PredictionsContainer from '@components/predictions'

const Predictions = () => {
  const { localStorageState } = useContext(LoginContext)

  return (
    <>
      <Header token={localStorageState !== null ? localStorageState : ''} />
      <LayoutPage>
        <Title title="Predições" color={color.gray900} />
        <ContainerSearch>
          <Search />
        </ContainerSearch>
        <PredictionsContainer />
      </LayoutPage>
      <Sidebar />
    </>
  )
}

export default Predictions
