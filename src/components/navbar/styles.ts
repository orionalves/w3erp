import styled from 'styled-components'
import { color, fonts } from '../../styles/constants'

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${color.primary};
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-family: ${fonts.poppins};
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: ${color.white};
`
