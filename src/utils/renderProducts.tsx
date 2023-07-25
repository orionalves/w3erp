/* eslint-disable indent */
import { capitalize } from '@utils/capitalize'
import { Link } from 'react-router-dom'

export const renderProducts = (productsArray?: ContentProductsApi[]) => {
  // const products = productsArray?.filter(
  //   filter => !filter.classificacao.includes('NEUTRO')
  // )

  return productsArray?.map((value, index) => (
    <tr key={index}>
      <td>{value?.id}</td>
      <td>
        <Link to={'/productdetails/' + value?.id}>
          {capitalize(value?.nome)}
        </Link>
      </td>
      <td>
        <div
          className={
            value.classificacao === 'NEUTRO'
              ? 'neutral'
              : value.classificacao === 'EM_BAIXA'
              ? 'down'
              : 'up'
          }
        >
          {value.classificacao === 'NEUTRO'
            ? 'Neutro'
            : value.classificacao === 'EM_BAIXA'
            ? 'Em baixa'
            : 'Em Alta'}
        </div>
      </td>
      <td>
        {value?.percentual > 0 && '+'}
        {value?.percentual}%
      </td>
    </tr>
  ))
}
