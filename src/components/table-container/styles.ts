import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const TableContainerStyled = styled.div`
  /* margin: 2rem; */
  /* margin-left: calc(17rem + 2rem); */
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
`
