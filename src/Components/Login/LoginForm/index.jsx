import axios from 'axios'
import React from 'react'
import { TOKEN_POST, USER_GET } from '../../../Api/api'
import useForm from '../../../Hooks/useForm'
import Button from '../../FormComponents/Button'
import Input from '../../FormComponents/Input'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser(token)
    }
  }, [])

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await axios.get(url, options)

    console.log(response.data)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, data } = TOKEN_POST({
        username: username.value,
        password: password.value,
      })

      const response = await axios.post(url, data)

      window.localStorage.setItem('token', response.data.token)
      getUser(response.data.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  )
}

export default LoginForm
