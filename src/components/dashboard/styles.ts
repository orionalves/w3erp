import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const DashboardStyled = styled.div`
  padding: 2.5rem;
  background-color: ${color.primary};
  border-radius: 24px;
  margin: 2rem;
  margin-left: calc(17rem + 2rem);
  overflow: hidden;
`

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`

export const DashboardCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2.5rem;
`
