import { SearchStyled } from './styles'
import search from '@icons/search.svg'

const Search = () => (
  <SearchStyled>
    <input type="text" placeholder="Pesquise uma palavra-chave" />
    <img src={search} alt="Lupa" />
  </SearchStyled>
)

export default Search
