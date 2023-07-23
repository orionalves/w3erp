/* eslint-disable indent */
import { capitalize } from '@utils/capitalize'

export const renderProducts = (productsArray?: ContentProductsApi[]) => {
  return productsArray?.map((value, index) => (
    <tr key={index}>
      <td>{value?.id}</td>
      <td>{capitalize(value?.nome)}</td>
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
