import React from 'react'
import { UserContext } from '../../../Contexts/UserContext'
import useForm from '../../../Hooks/useForm'
import Button from '../../FormComponents/Button'
import Input from '../../FormComponents/Input'
import Error from '../../Error'
import styles from './LoginForm.module.css'
import buttonStyles from '../../FormComponents/Button/Button.module.css'
import { Link } from 'react-router-dom'

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
    <section className='animateLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/login/perdeu">Perdeu a senha?</Link>
      <div className={styles.createContainer}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não tem uma conta?</p>
        <Link className={buttonStyles.button} to="/login/criar">Cadastre-se</Link>
      </div>
    </section>
  )
}

export default LoginForm
