import styled from 'styled-components'
import { color, fonts } from '@styles/constants'
import { Link } from 'react-router-dom'

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${color.primary};
`
export const ContentMenu = styled.div`
  padding: 0.5rem;
`
export const Menu = styled(Link)`
  text-decoration: none;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 1.4rem;
  font-family: ${fonts.poppins};
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: ${color.white};
  &.current {
    background-color: rgba(118, 130, 193, 0.3);
    border-radius: 8px;
  }
`
