import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const InputFieldStyled = styled.div`
  font-family: ${fonts.poppins};
  position: relative;
  label {
    position: absolute;
    top: -0.7rem;
    left: 0.7rem;
    font-size: 0.9rem;
    color: ${color.gray600};
    background-color: ${color.white};
    padding: 0 0.2rem;
  }
  input {
    width: 100%;
    border: 1px solid ${color.gray300};
    border-radius: 16px;
    padding: 1rem;
    font-size: 1rem;
    color: ${color.gray700};
    &:focus,
    &:not(:placeholder-shown) {
      color: ${color.gray900};
      border: 1px solid ${color.success};
      outline: none;
    }
    &::placeholder {
      color: ${color.gray400};
    }
  }
  &:focus-within {
    label {
      color: ${color.success};
    }
  }
`
