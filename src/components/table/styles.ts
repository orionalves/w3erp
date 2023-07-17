import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const TableStyled = styled.table`
  font-family: ${fonts.poppins};
  font-size: 1rem;
  border-collapse: collapse;
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
  tr {
    height: 3.5rem;
    border-bottom: 0.5rem solid ${color.white};
  }
  th,
  td {
    width: 100vw;
  }
  thead {
    font-weight: 600;
    color: ${color.primaryBlue4};
    background-color: ${color.primary};
  }
  tbody {
    text-align: center;
    border-spacing: 0.5rem;
    font-weight: 400;
    color: ${color.gray900};
    tr:nth-child(odd) {
      background-color: ${color.gray50};
    }
    tr:nth-child(even) {
      background-color: ${color.gray100};
    }
  }
`
