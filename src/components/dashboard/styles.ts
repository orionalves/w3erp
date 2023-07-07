import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const DashboardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem;
  background-color: ${color.primary};
  border-radius: 24px;
  margin: 2rem;
  margin-left: calc(17rem + 2rem);
  div.header,
  div.dashboard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    div.select {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border-radius: 8px;
      padding: 0.5rem 0.8rem;
      background-color: ${color.white};
      color: ${color.grey800};
      font-family: ${fonts.poppins};
    }
  }
`
