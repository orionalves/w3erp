import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const SearchStyled = styled.div`
  position: relative;
  width: 25rem;
  input {
    width: 100%;
    background-color: ${color.white};
    color: ${color.gray600};
    padding: 1rem;
    border-radius: 16px;
    border: 1.5px solid ${color.gray300};
    font-size: 1rem;
    font-family: ${fonts.poppins};
    color: ${color.gray800};
    &::placeholder {
      color: ${color.gray600};
    }
  }
  img {
    position: absolute;
    right: 1rem;
    top: 30%;
  }
  img:hover {
    cursor: pointer;
  }
`
