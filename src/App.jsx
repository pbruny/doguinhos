import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Photo from './Components/Photo';
import { UserStorage } from './Contexts/UserContext';
import UserLoggedArea from './Components/User/UserLoggedArea';
import ProtectedRoute from './Helper/ProtectedRoute';
import UserProfile from './Components/User/UserProfile';
import Error404 from './Components/Error404';

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className='appBody'>
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
            <Route path="/foto/:id" element={<Photo />} />
            <Route path="/perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
);

export default App;
