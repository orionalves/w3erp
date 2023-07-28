import styled from 'styled-components'
import { color } from '@styles/constants'

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 2.5rem 2rem;
  background-color: ${color.primary};
  color: ${color.white};
  border-radius: 24px;
  overflow: hidden;
  img.background {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    width: 100%;
  }
  h1 {
    position: relative;
    z-index: 1;
  }
  div {
    z-index: 1;
    margin-top: 0.2rem;
    display: flex;
    gap: 1.1rem;
    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`
