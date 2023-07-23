import styled from 'styled-components'
import { color, fonts } from '@styles/constants'
import { Link } from 'react-router-dom'

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 3rem;
  padding: 1rem;
  margin: auto 1.5rem;
  background-color: ${color.primaryBlue2};
  border-radius: 24px;
  color: ${color.white};
  font-family: ${fonts.poppins};
  letter-spacing: 0.2px;
  gap: 1rem;
  img {
    position: absolute;
    top: -6.3rem;
  }
  p {
    margin-top: 3rem;
    text-align: center;
    span.bold {
      font-weight: 600;
    }
  }
`

export const ButtonStyled = styled(Link)`
  text-decoration: none;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${color.primary};
  color: ${color.white};
  font-family: ${fonts.poppins};
  font-weight: 600;
  letter-spacing: 0.2px;
`
