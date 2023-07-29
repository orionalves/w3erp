import styled from 'styled-components'
import { color, fonts } from '@styles/constants'
import checked from '@icons/checkbox-fill.svg'

export const LoginLayoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${fonts.sora};
  div.center {
    margin: auto;
    width: 25rem;
    p {
      font-size: 1.25rem;
      color: ${color.gray800};
    }
    h2 {
      margin-top: 0.25rem;
      margin-bottom: 3.5rem;
      font-size: 2.25rem;
      font-weight: 700;
      color: ${color.gray900};
    }
    div.password {
      margin-top: 2rem;
    }
    div.flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: ${fonts.poppins};
      margin-top: 2em;
      margin-bottom: 2.5rem;
      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${color.gray900};
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
      }
      a {
        text-decoration: none;
        color: ${color.gray700};
      }
    }
    button {
      height: 3.5rem;
    }
  }
  img {
    height: 100vh;
  }
`
