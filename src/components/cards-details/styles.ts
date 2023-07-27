import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const CardsStyled = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  font-family: ${fonts.poppins};
  color: ${color.gray600};
`
export const Cards = styled.div`
  width: 100%;
  padding: 1.5rem;
  font-family: ${fonts.poppins};
  color: ${color.gray900};
  background-color: ${color.white};
  border-radius: 24px;
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  h3 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.2rem;
  }
  &.blue {
    color: ${color.white};
    background-color: ${color.primary};
    p.bold {
      color: ${color.white};
    }
  }
  p.bold {
    font-family: ${fonts.sora};
    font-size: 2rem;
    font-weight: 600;
    color: ${color.primary};
  }
  div.flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const Percent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.8rem;
  min-width: 4rem;
  height: 1.5rem;
  border-radius: 100px;
  font-family: ${fonts.poppins};
  font-size: 0.9rem;
  color: ${color.white};
  &.low {
    background-color: ${color.error};
  }
  font-size: 0.9rem;
  &.high {
    background-color: ${color.success};
  }
`
