import styled from 'styled-components'
import { color, fonts } from '@styles/constants'
import { Link } from 'react-router-dom'

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${color.primary};
`

export const Menu = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding-left: 1.5rem;
  gap: 1.4rem;
  font-family: ${fonts.poppins};
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: ${color.white};
`
