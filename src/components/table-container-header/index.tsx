import { TableContainerHeaderStyle, Title, IconTitle } from './styles'
import { ReactNode } from 'react'

type TableContainerHeaderProps = {
  title: string
  image?: string
  alt?: string
  color?: string
  children?: ReactNode
}

const TableContainerHeader = ({
  title,
  image,
  alt,
  color,
  children
}: TableContainerHeaderProps) => {
  return (
    <TableContainerHeaderStyle>
      <Title>
        <IconTitle color={color}>
          <img src={image} alt={alt} />
        </IconTitle>
        <h2>{title}</h2>
      </Title>
      {children}
    </TableContainerHeaderStyle>
  )
}

export default TableContainerHeader
