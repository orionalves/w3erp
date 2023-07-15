import { ChangeEventHandler } from 'react'
import { InputFieldStyled } from './styles'

type InputFieldType = {
  label: string
  type: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputField = ({ label, type, onChange }: InputFieldType) => (
  <InputFieldStyled>
    <label htmlFor={type}>{label}</label>
    <input
      id={type}
      type={type}
      name={type === 'password' ? 'senha' : 'email'}
      placeholder={
        type === 'password' ? 'Insira sua senha' : 'Insira seu email'
      }
      onChange={onChange}
    />
  </InputFieldStyled>
)

export default InputField
