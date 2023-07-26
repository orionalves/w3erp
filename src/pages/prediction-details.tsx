import LayoutDoubleTable from '@components/layout-double-table'
import LayoutPage from '@components/layout-page'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { color } from '@styles/constants'
import Title from '@components/title'
import { useParams } from 'react-router-dom'
import { getPredctionDetails } from '@services/predction-details'
import { getPredictions } from '@services/predictions'
import TablePredictionDetails from '@components/table-prediction-details'

const PredictionDetails = () => {
  const [history, setHistory] = useState<PreditionDetailsItem[]>()
  const [emptying, setEmptying] = useState<PreditionDetailsItem[]>()
  const [predictions, setPredictions] = useState<PredictionsContent[]>()

  const { localStorageState } = useContext(LoginContext)
  const predictionId = useParams<{ id: string }>()

  useEffect(() => {
    if (!localStorageState) {
      return
    }
    const fetchApi = async () => {
      try {
        const resultHistory = await getPredctionDetails(
          localStorageState,
          predictionId.id,
          'historico'
        )
        const resultEmptying = await getPredctionDetails(
          localStorageState,
          predictionId.id,
          'esgotando'
        )
        const resultPrediciton = await getPredictions(
          localStorageState,
          predictionId.id
        )
        setHistory(resultHistory)
        setEmptying(resultEmptying)
        setPredictions(resultPrediciton)
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchApi()
  }, [localStorageState, predictionId.id])
  return (
    <>
      <LayoutPage>
        <Title
          className="bold"
          title={predictions !== undefined ? predictions[0].nome : ''}
          color={color.primary}
        />
        <p>{predictions !== undefined && predictions[0].telefone}</p>
        <p>{predictions !== undefined && predictions[0].email}</p>
        <LayoutDoubleTable>
          <TablePredictionDetails title="Histórico" apiResult={history} />
          <TablePredictionDetails
            title="Produtos esgotando"
            apiResult={emptying}
          />
        </LayoutDoubleTable>
      </LayoutPage>
    </>
  )
}

export default PredictionDetails
