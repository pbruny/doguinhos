import React from 'react'
import { UserContext } from '../../../Contexts/UserContext'
import useForm from '../../../Hooks/useForm'
import Button from '../../FormComponents/Button'
import Input from '../../FormComponents/Input'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const { userLogin, error, login, loading } = React.useContext(UserContext)

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
    </section>
  )
}

export default LoginForm
