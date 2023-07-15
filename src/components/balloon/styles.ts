import styled from 'styled-components'
import { color, fonts } from '@styles/constants'
import { Link } from 'react-router-dom'

export const BalloonStyled = styled.div`
  position: absolute;
  top: 6rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.poppins};
  color: ${color.gray600};
  background-color: ${color.white};
  border-radius: 16px;
  box-shadow: 0px 0px 25px rgba(163, 163, 163, 0.2);
  hr {
    color: ${color.gray200};
    border-width: 1px;
    border-bottom: none;
  }
`

export const Menu = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.4rem;
`
