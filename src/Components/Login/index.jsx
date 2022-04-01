import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'
import styles from './Login.module.css'

const Login = () => (
  <div>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="create" element={<LoginCreate />} />
      <Route path="lost" element={<LoginLostPassword />} />
      <Route path="reset" element={<LoginResetPassword />} />
    </Routes>
  </div>
)

export default Login
