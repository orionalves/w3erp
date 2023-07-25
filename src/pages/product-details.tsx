import LayoutDoubleTable from '@components/layout-double-table'
import LayoutPage from '@components/layout-page'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import { color } from '@styles/constants'
import Title from '@components/title'
import { useParams } from 'react-router-dom'
import { getProductDetail, getProductSummary } from '@services/product-details'
import TableProductDetails from '@components/table-product-details'

const ProductDetails = () => {
  const [downProduct, setDownProduct] = useState<ProductIdClient>([])
  const [upProduct, setUpProduct] = useState<ProductIdClient>([])
  const [summary, setSummary] = useState<ProductIdSummary>()
  const { localStorageState } = useContext(LoginContext)
  const productId = useParams<{ id: string }>()

  useEffect(() => {
    if (!localStorageState) {
      return
    }
    const fetchApi = async () => {
      try {
        const resultUpProduct = await getProductDetail(
          localStorageState,
          'EM_ALTA',
          productId.id
        )
        const resultDownProduct = await getProductDetail(
          localStorageState,
          'EM_BAIXA',
          productId.id
        )
        const resultSummary = await getProductSummary(
          localStorageState,
          productId.id
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
          title={summary !== undefined ? summary.nome : ''}
          color={color.primary}
        />
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
