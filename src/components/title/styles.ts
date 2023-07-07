import styled from 'styled-components'
import { fonts } from '@styles/constants'

export const TitleStyled = styled.h1`
  font-size: 2rem;
  font-family: ${fonts.sora};
  font-weight: 600;
  color: ${props => props.color};
  &.bold {
    font-size: 2.25rem;
    font-weight: 700;
  }
`
