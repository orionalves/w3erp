import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const TableContainerStyled = styled.div`
  padding: 2rem;
  background-color: ${color.white};
  border-radius: 24px;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
`

export const TableContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: ${fonts.sora};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${color.gray900};
`

export const IconTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  border-radius: 8px;
  width: 3rem;
  height: 3rem;
`

export const UpDown = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  font-family: ${fonts.poppins};
  font-size: 0.9rem;
  background-color: ${color.gray100};
  border-radius: 8px;
  border: 0.8px solid ${color.gray300};
  color: ${color.gray500};
  div {
    display: flex;
    justify-content: center;
    padding: 0.4rem 1.25rem;
    &.up {
      border-radius: 8px;
      background-color: ${color.success};
      font-weight: 600;
      color: ${color.white};
    }
    &.down {
      border-radius: 8px;
      background-color: ${color.error};
      color: ${color.white};
    }
    &:hover {
      cursor: pointer;
    }
  }
`
