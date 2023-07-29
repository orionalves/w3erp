import styled from 'styled-components'
import { color, fonts } from '@styles/constants'

export const TableContainerHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.div<{ titlecolor?: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: ${fonts.sora};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.titlecolor || color.gray900};
`

export const IconTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  border-radius: 8px;
  width: 3rem;
  height: 3rem;
`
