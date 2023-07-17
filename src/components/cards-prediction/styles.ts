import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: ${color.white};
  border-radius: 24px;
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  font-family: ${fonts.poppins};
  .header {
    display: flex;
    gap: 1rem;
  }
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${color.primaryBlue4};
  }
  table {
    width: 100%;
    padding: 1rem;
    border-radius: 16px;
    opacity: 0.5;
    background-color: ${color.gray200};
    border-spacing: 0 0.6rem;
    th {
      text-align: left;
      font-size: 0.8rem;
      color: ${color.primaryBlue2};
      font-weight: 400;
      &.center {
        text-align: center;
      }
    }
    td {
      font-size: 0.8rem;
      color: ${color.gray800};
      font-weight: 400;
      &.bold {
        font-weight: 600;
        text-align: center;
      }
    }
  }
  .title h2 {
    font-size: 1rem;
    font-weight: 600;
    color: ${color.gray900};
    margin-right: 4.75rem;
  }
  .title li {
    font-size: 0.8rem;
    color: ${color.success};
  }
`
