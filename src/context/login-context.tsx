import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type LoginContextType = {
  localStorageState: string | null
  setLocalStorageState: React.Dispatch<React.SetStateAction<string | null>>
}

// const initialValue = {
//   localStorageState: localStorage.getItem('TOKEN'),
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   setLocalStorageState: () => {}
// }

// export const LoginContext = createContext<LoginContextType>(initialValue)
// export const LoginContext = createContext({})
export const LoginContext = createContext<LoginContextType>({
  localStorageState: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLocalStorageState: () => {}
})

export const LoginProvider = ({ children }: ChildrenType) => {
  const [localStorageState, setLocalStorageState] = useState(
    localStorage.getItem('TOKEN')
  )
  const navigate = useNavigate()
  useEffect(() => {
    setLocalStorageState(localStorage.getItem('TOKEN'))
    if (!localStorageState) {
      navigate('/login')
      return
    }
    navigate('/home')
  }, [localStorageState, navigate])

  return (
    <LoginContext.Provider value={{ localStorageState, setLocalStorageState }}>
      {children}
    </LoginContext.Provider>
  )
}
