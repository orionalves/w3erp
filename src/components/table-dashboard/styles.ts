import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const TableDashboardStyled = styled.div`
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
      width: 50%;
    }
  }
`
export const UpDown = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  font-family: ${fonts.poppins};
  font-size: 0.9rem;
  background-color: ${color.gray100};
  border-radius: 8px;
  border: 0.8px solid ${color.gray300};
  color: ${color.gray500};
  div {
    display: flex;
    justify-content: center;
    padding: 0.4rem 1.25rem;
    &.up {
      border-radius: 8px;
      background-color: ${color.success};
      font-weight: 600;
      color: ${color.white};
    }
    &.down {
      border-radius: 8px;
      background-color: ${color.error};
      color: ${color.white};
    }
    &:hover {
      cursor: pointer;
    }
  }
`
