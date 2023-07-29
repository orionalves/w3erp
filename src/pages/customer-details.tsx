import LayoutDoubleTable from '@components/layout-double-table'
import LayoutPage from '@components/layout-page'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { color } from '@styles/constants'
import Title from '@components/title'
import { useParams } from 'react-router-dom'
import {
  getProductCustomerDetail,
  getProductCustomerSummary
} from '@services/product-customer-details'
import TableProductDetails from '@components/table-product- customer-details'
import CardsDetails from '@components/cards-details'
import HistoryBack from '@components/history-back'

const ProductDetails = () => {
  const [downCustomer, setDownCustomer] = useState<ProductCustomerClient>([])
  const [upCustomer, setUpCustomer] = useState<ProductCustomerClient>([])
  const [summary, setSummary] = useState<ProductCustomerSummary>()
  const { localStorageState } = useContext(LoginContext)
  const productId = useParams<{ id: string }>()

  useEffect(() => {
    if (!localStorageState) {
      return
    }
    const fetchApi = async () => {
      try {
        const resultUpProduct = await getProductCustomerDetail(
          localStorageState,
          'EM_ALTA',
          productId.id,
          'cliente'
        )
        const resultDownProduct = await getProductCustomerDetail(
          localStorageState,
          'EM_BAIXA',
          productId.id,
          'cliente'
        )
        const resultSummary = await getProductCustomerSummary(
          localStorageState,
          productId.id,
          'cliente'
        )
        setUpCustomer(resultUpProduct)
        setDownCustomer(resultDownProduct)
        setSummary(resultSummary)
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchApi()
  }, [summary, localStorageState, productId.id])
  return (
    <>
      <LayoutPage>
        <HistoryBack title="Detalhamento" />
        <Title
          className="bold"
          title={summary !== undefined ? summary.nome : ''}
          color={color.primary}
        />
        <CardsDetails summary={summary} />
        <LayoutDoubleTable>
          <TableProductDetails
            title="Produtos em baixa"
            apiResult={downCustomer}
          />
          <TableProductDetails
            title="Produtos em alta"
            apiResult={upCustomer}
          />
        </LayoutDoubleTable>
      </LayoutPage>
    </>
  )
}

export default ProductDetails
