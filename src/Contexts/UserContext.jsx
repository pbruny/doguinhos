import axios from 'axios'
import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../Api/api'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [error, setError] = React.useState(null)
  const navigate = useNavigate()
  
  const userLogout = React.useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(null)
    setLogin(null)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await axios.get(url, options)

    setData(response.data)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)
      const { url, data } = TOKEN_POST({ username, password })
      const tokenRes = await axios.post(url, data)

      const { token } = await tokenRes.data
  
      window.localStorage.setItem('token', token)
      await getUser(token);
      navigate('/conta')
    } catch (err) {
      setError('Invalid Credentials')
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await axios.post(url, {}, options)
  
          if(!response.status === 200) {
            throw new Error('Invalid token')
          }

          await getUser(token)

        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }

    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}