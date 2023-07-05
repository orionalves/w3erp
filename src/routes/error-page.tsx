import { useRouteError } from 'react-router-dom'

export default function ErrorPage(): React.JSX.Element {
  const error: unknown = useRouteError()

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, Essa página não existe.</p>
      <p>
        Clique no botão para voltar!
        <button onClick={() => history.back()}>◀️</button>
        <i>
          {(error as { statusText?: string }).statusText ||
            (error as Error)?.message}
        </i>
      </p>
    </div>
  )
}
