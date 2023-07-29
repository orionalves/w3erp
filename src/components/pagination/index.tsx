import { PaginationStyled, Numbers } from './styles'
import left from '@icons/chevron left.svg'
import right from '@icons/chevron right.svg'

type PaginationProps = {
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
  totalPages: number
}

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalPages
}: PaginationProps) => {
  const handleNumberClick = (selectedPage: number) => {
    setPageNumber(selectedPage)
  }

  const arrowDownHandleNumberClick = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1)
    }
  }

  const arrowUpHandleNumberClick = () => {
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1)
    }
  }

  const renderNumbers = () => {
    const numbersToDisplay = 5
    const halfDisplayed = Math.floor(numbersToDisplay / 2)
    let startNumber = Math.max(pageNumber - halfDisplayed, 0)
    const endNumber = Math.min(
      startNumber + numbersToDisplay - 1,
      totalPages - 1
    )

    if (endNumber - startNumber < numbersToDisplay - 1) {
      startNumber = Math.max(endNumber - (numbersToDisplay - 1), 0)
    }

    const numbers = []
    for (let i = startNumber; i <= endNumber; i++) {
      numbers.push(
        <Numbers
          key={i}
          isactive={pageNumber === i ? 'true' : 'false'}
          onClick={() => handleNumberClick(i)}
        >
          {i + 1}
        </Numbers>
      )
    }

    return numbers
  }

  return (
    <PaginationStyled>
      <img
        src={left}
        alt="Seta para esquerda."
        onClick={() => arrowDownHandleNumberClick()}
      />
      {renderNumbers()}
      <img
        src={right}
        alt="Seta para direita."
        onClick={() => arrowUpHandleNumberClick()}
      />
    </PaginationStyled>
  )
}

export default Pagination
