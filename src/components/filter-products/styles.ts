import styled from 'styled-components'
import { color, fonts } from '@styles/constants'
import checked from '@icons/checkbox-fill.svg'

export const FilterStyled = styled.div`
  position: absolute;
  top: 0rem;
  left: 32.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 16rem;
  padding: 1rem;
  font-family: ${fonts.poppins};
  font-size: 1rem;
  color: ${color.gray900};
  background-color: ${color.white};
  border-radius: 16px;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
  hr {
    color: ${color.gray300};
    border-width: 2px;
    border-bottom: none;
  }
`
export const FilterChoose = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  input[type='checkbox'] {
    appearance: none;
    min-width: calc(1.5rem - 3px);
    height: calc(1.5rem - 3px);
    border: 3px solid #bdbdbd;
    border-radius: 1.5px;
    cursor: pointer;
  }
  input[type='checkbox']:checked {
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-position: center;
    border: none;
  }
  input[type='checkbox']:checked + label {
    font-weight: 600;
  }
  label {
    width: 100%;
  }
`
