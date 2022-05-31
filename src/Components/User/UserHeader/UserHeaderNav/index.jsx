import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../../Contexts/UserContext';
import { ReactComponent as MyPics } from '../../../../Assets/feed.svg';
import { ReactComponent as Stats } from '../../../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../../../Hooks/useMedia';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname])

  return (
    <>
      {mobile && (
        <button 
          aria-label='Menu'
          className={`${styles.mobileMenuButton} ${mobileMenu && styles.mobileMenuButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
        </button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MyPics />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/stats">
          <Stats />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/post">
          <AddPhoto />
          {mobile && 'Adicionar foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Logout />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav