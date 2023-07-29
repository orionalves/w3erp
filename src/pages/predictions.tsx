import LayoutPage from '@components/layout-page'
import Title from '@components/title'
import { color } from '@styles/constants'
import Search from '@components/search'
import ContainerSearch from '@components/container-search'
import PredictionsContainer from '@components/predictions'
import { useContext, useEffect, useRef, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { getPredictions } from '@services/predictions'

const Predictions = () => {
  const { localStorageState } = useContext(LoginContext)
  const [predictions, setPredictions] = useState<PredictionsContent[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const endScroll = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!localStorageState) {
      return
    }
    const fetchApi = async () => {
      try {
        const resultPredictions = await getPredictions(
          localStorageState,
          undefined,
          page
        )
        if (predictions.length > 0) {
          setPredictions(prevPredictions => [
            ...prevPredictions,
            ...resultPredictions
          ])
        } else {
          setPredictions(resultPredictions)
        }
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchApi()
  }, [localStorageState, page])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio
      if (ratio > 0) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if (endScroll.current) {
      intersectionObserver.observe(endScroll.current)
    }
    return () => {
      intersectionObserver.disconnect()
    }
  }, [endScroll])

  return (
    <LayoutPage>
      <Title title="Predições" color={color.gray900} />
      <ContainerSearch>
        <Search
          onChange={event => setSearch(event.target.value)}
          value={search}
        />
      </ContainerSearch>
      <PredictionsContainer predictions={predictions} search={search}>
        <div ref={endScroll} />
      </PredictionsContainer>
    </LayoutPage>
  )
}

export default Predictions
