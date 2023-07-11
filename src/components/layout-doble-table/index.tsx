import { ReactNode } from 'react'
import { LayoutDoubleTableStyled } from './styles'

type ChildrenType = {
  children: ReactNode
}

const LayoutDoubleTable = ({ children }: ChildrenType) => (
  <LayoutDoubleTableStyled>{children}</LayoutDoubleTableStyled>
)

export default LayoutDoubleTable
