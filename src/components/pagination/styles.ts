import styled from 'styled-components'
import { color } from '@styles/constants'

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  img:hover {
    cursor: pointer;
  }
`

export const Numbers = styled.div<{ isactive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 4px;
  font-weight: ${({ isactive }) => (isactive ? 600 : 'normal')};
  color: ${({ isactive }) => (isactive ? color.white : color.gray500)};
  background-color: ${({ isactive }) =>
    isactive ? color.primary : 'transparent'};
  &:hover {
    cursor: pointer;
  }
`
