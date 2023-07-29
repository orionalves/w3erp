import { FilterStyled, FilterChoose } from './styles'
import Button from '@components/button'

type FilterProps = {
  all?: number
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  classification: '' | 'EM_BAIXA' | 'EM_ALTA'
  setClassification: React.Dispatch<
    React.SetStateAction<'' | 'EM_BAIXA' | 'EM_ALTA'>
  >
}

const Filter = ({
  all,
  setShow,
  classification,
  setClassification
}: FilterProps) => {
  return (
    <FilterStyled>
      <h2>Filtrar por:</h2>
      <hr />
      <p>Status</p>
      {all !== undefined && (
        <>
          <FilterChoose>
            <input
              type="checkbox"
              checked={classification === ''}
              onClick={() => setClassification('')}
              id="all"
              name="filter"
            />
            <label htmlFor="all">Todos</label>
            {classification === '' && <p>{all}</p>}
          </FilterChoose>
          <FilterChoose>
            <input
              type="checkbox"
              checked={classification === 'EM_ALTA'}
              onClick={() => setClassification('EM_ALTA')}
              id="up"
              name="filter"
            />
            <label htmlFor="up">Em alta</label>
            {classification === 'EM_ALTA' && <p>{all}</p>}
          </FilterChoose>
          <FilterChoose>
            <input
              type="checkbox"
              checked={classification === 'EM_BAIXA'}
              onClick={() => setClassification('EM_BAIXA')}
              id="down"
              name="filter"
            />
            <label htmlFor="down">Em baixa</label>
            {classification === 'EM_BAIXA' && <p>{all}</p>}
          </FilterChoose>
        </>
      )}
      <Button title="Aplicar" onClick={() => setShow(false)} />
    </FilterStyled>
  )
}

export default Filter
