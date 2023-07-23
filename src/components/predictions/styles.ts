import styled from 'styled-components'
import { color } from '@styles/constants'

export const PredictionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  height: calc(100vh - 2rem - 3.5rem - 2rem - 2.5rem - 2rem - 8rem);
  overflow-y: scroll;
  padding-bottom: 2rem;
  padding-right: 2rem;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color.gray400};
    border-radius: 4px;
    box-shadow: 0px 4px 4px 0px rgba(189, 189, 189, 0.5) inset;
    border: none;
  }

  &::-webkit-scrollbar-track {
    background-color: ${color.gray100};
  }
`
