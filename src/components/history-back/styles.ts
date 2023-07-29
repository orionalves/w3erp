import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const HistoryBackStyled = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-family: ${fonts.sora};
  font-size: 1.25rem;
  color: ${color.gray900};
  &:hover {
    cursor: pointer;
  }
`
