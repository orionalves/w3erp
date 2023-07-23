import { FilterStyled, FilterChoose } from './styles'
import Button from '@components/button'

type FilterProps = {
  all?: number
  up?: number
  down?: number
  checkUp: boolean
  checkDown: boolean
  setCheckUp: React.Dispatch<React.SetStateAction<boolean>>
  setCheckDown: React.Dispatch<React.SetStateAction<boolean>>
}

const Filter = ({
  all,
  up,
  down,
  checkUp,
  checkDown,
  setCheckUp,
  setCheckDown
}: FilterProps) => {
  return (
    <FilterStyled>
      <h2>Filtrar por:</h2>
      <hr />
      <p>Status</p>
      {all !== undefined && (
        <FilterChoose>
          <input type="checkbox" id="all" />
          <label htmlFor="all">Todos</label>
          <p>{all}</p>
        </FilterChoose>
      )}
      {up !== undefined && (
        <FilterChoose>
          <input
            type="checkbox"
            checked={checkUp}
            onChange={() => setCheckUp(!checkUp)}
            id="up"
          />
          <label htmlFor="up">Em alta</label>
          <p>{up}</p>
        </FilterChoose>
      )}
      {down !== undefined && (
        <FilterChoose>
          <input
            type="checkbox"
            checked={checkDown}
            onChange={() => setCheckDown(!checkDown)}
            id="down"
          />
          <label htmlFor="down">Em baixa</label>
          <p>{down}</p>
        </FilterChoose>
      )}
      <Button title="Aplicar" />
    </FilterStyled>
  )
}

export default Filter
