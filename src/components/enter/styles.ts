import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const EnterStyled = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 4rem;
  font-family: ${fonts.poppins};
  font-weight: 600;
  color: ${color.white};
  background-color: ${color.primary};
  border-radius: 16px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #2256a6;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
