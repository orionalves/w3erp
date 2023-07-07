import { useState } from 'react'
import { SelectStyled } from './styles'

const months = [
  'Esse mês',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const MonthSelect = () => {
  const [selectedMonth, setSelectedMonth] = useState('Esse mês')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== 'Esse mês') {
      setSelectedMonth(e.target.value)
    }
  }

  return (
    <SelectStyled value={selectedMonth} onChange={handleChange}>
      {months.map(month => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </SelectStyled>
  )
}

export default MonthSelect
