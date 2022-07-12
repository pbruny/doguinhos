import React from 'react'
import axios from 'axios'
import Input from '../../FormComponents/Input'
import Button from '../../FormComponents/Button'
import useForm from '../../../Hooks/useForm'
import { USER_POST } from '../../../Api/api'
import { UserContext } from '../../../Contexts/UserContext'
import Head from '../../../Helper/Head'

const LoginCreate = () => {
  const email = useForm('email')
  const username = useForm()
  const password = useForm('password')

  const { userLogin } = React.useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { url, data } = USER_POST({
      email: email.value, 
      username: username.value, 
      password: password.value 
    })

    const response = await axios.post(url, data)

    if(response.status === 200) {
      userLogin(username.value, password.value)
    }

  }

  return (
    <section className='animateLeft'>
      <Head title="Crie sua conta" />
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate
