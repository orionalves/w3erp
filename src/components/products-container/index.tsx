/* eslint-disable indent */
import Search from '@components/search'
import { ProductContainerStyled } from './styles'
import filter from '@icons/filter.svg'
import Table from '@components/new-table'
import Pagination from '@components/pagination'
import { tableProductsPageTh } from '@constants/index'
import { renderProducts } from '@utils/renderProducts'
import Filter from '@components/filter-products'
import { useState } from 'react'

type ProductsContainerProps = {
  products?: Partial<ProductsApi>
  search: string
  onChange: React.Dispatch<React.SetStateAction<string>>
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

const ProductsContainer = ({
  products,
  search,
  onChange,
  pageNumber,
  setPageNumber
}: ProductsContainerProps) => {
  const [show, setShow] = useState(false)
  const [upChecked, setUpChecked] = useState(false)
  const [downChecked, setDownChecked] = useState(false)
  const productsNumberOfElements = products?.numberOfElements
  const productsTotalElements = products?.totalElements
  const productsTablePages = products?.totalPages
  const down = products?.content?.filter(filter =>
    filter.classificacao.includes('EM_BAIXA')
  ).length
  const up = products?.content?.filter(filter =>
    filter.classificacao.includes('EM_ALTA')
  ).length
  // const filteredUp = upChecked
  //   ? products?.content?.filter(filter =>
  //       filter.classificacao.includes('EM_ALTA')
  //     )
  //   : []
  const filteredProducts =
    search.length > 0
      ? products?.content?.filter(filter =>
          filter.nome.toLowerCase().includes(search.toLowerCase())
        )
      : []

  // let check: ContentProductsApi[] | undefined = undefined
  // if (upChecked && !downChecked) {
  //   return (check = products?.content?.filter(filter =>
  //     filter.classificacao.includes('EM_ALTA')
  //   ))
  // }
  // if (!upChecked && downChecked) {
  //   return (check = products?.content?.filter(filter =>
  //     filter.classificacao.includes('EM_BAIXA')
  //   ))
  // }
  // if (upChecked && downChecked) {
  //   return (check = products?.content?.filter(
  //     filter =>
  //       filter.classificacao.includes('EM_ALTA') &&
  //       filter.classificacao.includes('EM_BAIXA')
  //   ))
  // }

  return (
    <ProductContainerStyled>
      <div className="search">
        <Search
          onChange={event => onChange(event.target.value)}
          value={search}
        />
        <img src={filter} alt="Filtro" onClick={() => setShow(!show)} />
        {show && (
          <Filter
            all={productsTotalElements}
            down={down}
            up={up}
            checkUp={upChecked}
            checkDown={downChecked}
            setCheckUp={setUpChecked}
            setCheckDown={setDownChecked}
          />
        )}
      </div>
      <Table th={tableProductsPageTh}>
        {/* {upChecked
          ? renderProducts(filteredUp)
          : renderProducts(products?.content)} */}
        {search.length > 0
          ? renderProducts(filteredProducts)
          : renderProducts(products?.content)}
      </Table>
      <div className="pagination">
        <p>
          {productsNumberOfElements} de {productsTotalElements} itens
        </p>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={productsTablePages !== undefined ? productsTablePages : 0}
        />
      </div>
    </ProductContainerStyled>
  )
}

export default ProductsContainer
