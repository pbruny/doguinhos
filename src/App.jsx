import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Login from './Components/Login'
import { UserStorage } from './Contexts/UserContext'
import UserLoggedArea from './Components/User/UserLoggedArea'
import ProtectedRoute from './Helper/ProtectedRoute'

const App = () => (
  <div>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route 
            path="/conta/*" 
            element={
            <ProtectedRoute>
              <UserLoggedArea />
            </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />

      </UserStorage>
    </BrowserRouter>
  </div>
)

export default App
