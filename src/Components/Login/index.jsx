import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'
import styles from './Login.module.css'
import { UserContext } from '../../Contexts/UserContext'
import Error404 from '../Error404'
import Head from '../../Helper/Head'

const Login = () => {

  const { login } = React.useContext(UserContext)

  if (login) return <Navigate to="/conta" />

  return (
    <section className={styles.login}>
      <Head title="Resetar senha" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginLostPassword />} />
          <Route path="resetar" element={<LoginResetPassword />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </section>
  )
}


export default Login
