import { Cards, CardsStyled, Percent } from './styles'

type CardsDetailsOProps = {
  summary?: ProductCustomerSummary
}

const CardsDetails = ({ summary }: CardsDetailsOProps) => {
  return (
    <CardsStyled>
      {summary != null && (
        <>
          <Cards className="blue">
            <h3>Média 120 dias</h3>
            <p className="bold">{summary?.media120Dias}</p>
          </Cards>
          <Cards>
            <h3>Últimos 30 dias</h3>
            <div className="flex">
              <p className="bold">{summary?.ultimos30Dias}</p>
              <Percent
                className={summary.percentualUltimos30Dias > 0 ? 'high' : 'low'}
              >
                {summary?.percentualUltimos30Dias > 0 && '+'}
                {summary?.percentualUltimos30Dias}%
              </Percent>
            </div>
          </Cards>
          <Cards>
            <h3>Últimos 60 dias</h3>
            <p className="bold">{summary?.ultimos60Dias}</p>
          </Cards>
          <Cards>
            <h3>Últimos 90 dias</h3>
            <p className="bold">{summary?.ultimos90Dias}</p>
          </Cards>
          <Cards>
            <h3>Últimos 120 dias</h3>
            <p className="bold">{summary?.ultimos120Dias}</p>{' '}
          </Cards>
        </>
      )}
    </CardsStyled>
  )
}

export default CardsDetails
