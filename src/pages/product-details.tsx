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

const ProductDetails = () => {
  const [downProduct, setDownProduct] = useState<ProductCustomerClient>([])
  const [upProduct, setUpProduct] = useState<ProductCustomerClient>([])
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
          'produto'
        )
        const resultDownProduct = await getProductCustomerDetail(
          localStorageState,
          'EM_BAIXA',
          productId.id,
          'produto'
        )
        const resultSummary = await getProductCustomerSummary(
          localStorageState,
          productId.id,
          'produto'
        )
        setUpProduct(resultUpProduct)
        setDownProduct(resultDownProduct)
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
        <Title
          className="bold"
          title={summary != null ? summary.nome : ''}
          color={color.primary}
        />
        <CardsDetails summary={summary} />
        <LayoutDoubleTable>
          <TableProductDetails
            title="Clientes em baixa"
            apiResult={downProduct}
          />
          <TableProductDetails title="Clientes em alta" apiResult={upProduct} />
        </LayoutDoubleTable>
      </LayoutPage>
    </>
  )
}

export default ProductDetails
