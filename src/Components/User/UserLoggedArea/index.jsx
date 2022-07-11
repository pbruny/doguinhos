import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../../Contexts/UserContext'
import Feed from '../../Feed'
import UserHeader from '../UserHeader'
import UserPhotoPost from '../UserPhotoPost'
import UserStats from '../UserStats'

const UserLoggedArea = () => {
  const {data} = React.useContext(UserContext);

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='/post' element={<UserPhotoPost />} />
        <Route path='/stats' element={<UserStats />} />
      </Routes>
    </section>
  )
}

export default UserLoggedArea