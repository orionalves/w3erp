import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const DashboardCardStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  background-color: ${color.primaryStrong};
  border-radius: 24px;
`

export const TitleStyled = styled.p`
  white-space: nowrap;
  color: ${color.primaryBlue4};
  font-family: ${fonts.poppins};
  text-align: center;
  margin-bottom: 0.4rem;
  span.bold {
    font-weight: 600;
  }
`

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${color.white};
  p {
    font-family: ${fonts.sora};
    font-weight: 600;
    font-size: 2rem;
  }
`

export const Precent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.8rem;
  min-width: 4rem;
  height: 1.5rem;
  border-radius: 100px;
  font-family: ${fonts.poppins};
  font-size: 0.9rem;
  &.low {
    background-color: ${color.error};
  }
  font-size: 0.9rem;
  &.high {
    background-color: ${color.success};
  }
`
