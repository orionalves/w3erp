import App from '../App'
import { LoginProvider } from '@context/login-context'

export default function Root() {
  return (
    <LoginProvider>
      <App />
    </LoginProvider>
  )
}
