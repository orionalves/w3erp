import { PaginationStyled, Numbers } from './styles'
import left from '@icons/chevron left.svg'
import right from '@icons/chevron right.svg'
import { useState } from 'react'

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const handleNumberClick = (selectedPage: number) => {
    setPageNumber(selectedPage)
  }

  const arrowDownHandleNumberClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const arrowUpHandleNumberClick = () => {
    if (pageNumber < 4) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <PaginationStyled>
      <img
        src={left}
        alt="Seta para esquerda."
        onClick={() => arrowDownHandleNumberClick()}
      />
      <Numbers isActive={pageNumber === 1} onClick={() => handleNumberClick(1)}>
        1
      </Numbers>
      <Numbers isActive={pageNumber === 2} onClick={() => handleNumberClick(2)}>
        2
      </Numbers>
      <Numbers isActive={pageNumber === 3} onClick={() => handleNumberClick(3)}>
        3
      </Numbers>
      <Numbers isActive={pageNumber === 4} onClick={() => handleNumberClick(4)}>
        4
      </Numbers>
      <img
        src={right}
        alt="Seta para direita."
        onClick={() => arrowUpHandleNumberClick()}
      />
    </PaginationStyled>
  )
}

export default Pagination
