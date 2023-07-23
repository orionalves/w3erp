import { ChangeEventHandler } from 'react'
import { SearchStyled } from './styles'
import search from '@icons/search.svg'

type SearchProps = {
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
}

const Search = ({ onChange, value }: SearchProps) => (
  <SearchStyled>
    <input
      onChange={onChange}
      type="text"
      placeholder="Pesquise uma palavra-chave"
      value={value}
    />
    <img src={search} alt="Lupa" />
  </SearchStyled>
)

export default Search
