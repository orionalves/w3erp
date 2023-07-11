import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1rem;
  padding-right: 3rem;
  position: relative;
  background-color: ${color.white};
  height: 8rem;
  width: 100%;
  h3 {
    font-family: ${fonts.sora};
    font-size: 1.25rem;
    font-weight: 600;
    color: ${color.gray900};
  }
  p {
    font-family: ${fonts.poppins};
    color: ${color.gray600};
  }
`
