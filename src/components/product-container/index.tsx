import Search from '@components/search'
import { ProductContainerStyled } from './styles'
import filter from '@icons/filter.svg'
import Table from '@components/table'
import Pagination from '@components/pagination'

type ProductContainerProps = {
  td: TableProductsPage[]
}

const thTableProductsPage = ['ID', 'Produto', 'Status', 'Percentual']

const ProductContainer = ({ td }: ProductContainerProps) => (
  <ProductContainerStyled>
    <div className="search">
      <Search />
      <img src={filter} alt="Filtro" />
    </div>
    <Table th={thTableProductsPage} td={td} />
    <div className="pagination">
      <p>07 de 100 itens</p>
      <Pagination />
    </div>
  </ProductContainerStyled>
)

export default ProductContainer
