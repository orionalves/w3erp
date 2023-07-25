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
    position: relative;
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
  table thead tr th:nth-child(1) {
    width: 10%;
  }
  table thead tr th:nth-child(2) {
    width: 50%;
  }
  table thead tr th:nth-child(2),
  table thead tr th:nth-child(3),
  table tbody tr td:nth-child(2),
  table tbody tr td:nth-child(3) {
    text-align: left;
  }
  table tbody tr td a {
    text-decoration: none;
    color: ${color.gray900};
  }
  table tbody tr td div {
    display: flex;
    justify-content: center;
    padding: 0.5rem 1.1rem;
    width: fit-content;
    border-radius: 8px;
    &.neutral {
      background-color: ${color.gray300};
      color: ${color.white};
    }
    &.down {
      background-color: ${color.lightRed};
      color: ${color.error};
    }
    &.up {
      background-color: ${color.lightGreen};
      color: ${color.success};
    }
  }
`
