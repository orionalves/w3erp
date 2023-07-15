import { GlobalStyle } from './styles/global-style'
import { LoginProvider } from '@context/login-context'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <LoginProvider>
      <GlobalStyle />
      <Outlet />
    </LoginProvider>
  )
}

export default App
