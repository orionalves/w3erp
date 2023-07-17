import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const ProductContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 24px;
  background: ${color.white};
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  div.search {
    display: flex;
    gap: 2rem;
    img:hover {
      cursor: pointer;
    }
  }
  div.pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: ${fonts.poppins};
    font-size: 0.8rem;
    color: ${color.gray500};
  }
`
