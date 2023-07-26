import LayoutPage from '@components/layout-page'
import Title from '@components/title'
import { color } from '@styles/constants'
import Search from '@components/search'
import ContainerSearch from '@components/container-search'
import PredictionsContainer from '@components/predictions'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { getPredictions } from '@services/predictions'

const Predictions = () => {
  const { localStorageState } = useContext(LoginContext)
  const [predictions, setPredictions] = useState<PredictionsContent[]>()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!localStorageState) {
      return
    }
    const fetchApi = async () => {
      try {
        const resultPredictions = await getPredictions(localStorageState)
        setPredictions(resultPredictions)
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchApi()
  }, [localStorageState])

  return (
    <LayoutPage>
      <Title title="Predições" color={color.gray900} />
      <ContainerSearch>
        <Search
          onChange={event => setSearch(event.target.value)}
          value={search}
        />
      </ContainerSearch>
      <PredictionsContainer predictions={predictions} search={search} />
    </LayoutPage>
  )
}

export default Predictions
