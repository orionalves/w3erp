import styled from 'styled-components'
import { color } from '@styles/constants'

export const TablePredictionDetailsStyled = styled.div`
  flex: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: ${color.white};
  border-radius: 24px;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  table {
    tr th:nth-child(2) {
      text-align: left;
      width: 40%;
    }
  }
`
