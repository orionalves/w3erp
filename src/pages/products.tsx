import LayoutPage from '@components/layout-page'
import { color } from '@styles/constants'
import Title from '@components/title'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '@context/login-context'
import ProductsContainer from '@components/products-container'
import { getProducts } from '@services/products'

const Products = () => {
  const { localStorageState } = useContext(LoginContext)
  const [products, setProducts] = useState<Partial<ProductsApi>>({})
  const [search, setSearch] = useState('')
  const [pageNumber, setPageNumber] = useState(0)
  const [classification, setClassification] = useState<
    '' | 'EM_ALTA' | 'EM_BAIXA'
  >('')

  useEffect(() => {
    if (!localStorageState) {
      return
    }
    const fetchApi = async () => {
      try {
        const resultProducts = await getProducts(
          localStorageState,
          search,
          pageNumber,
          classification
        )
        setProducts(resultProducts)
      } catch (event) {
        if (event instanceof Error) {
          window.alert(event.message)
        }
      }
    }

    fetchApi()
  }, [localStorageState, search, pageNumber, classification])

  useEffect(() => {
    setPageNumber(0)
  }, [search])
  return (
    <LayoutPage>
      <Title title="Produtos" color={color.gray900} />
      <ProductsContainer
        search={search}
        onChange={setSearch}
        products={products}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        classification={classification}
        setClassification={setClassification}
      />
    </LayoutPage>
  )
}

export default Products
