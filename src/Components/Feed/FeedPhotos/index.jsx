import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../../Error'
import useFetch from '../../../Hooks/useFetch'
import { PHOTOS_GET } from '../../../Api/api';
import Loading from '../../Loading';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 3, user });
      const { json } = await request(url, options)
    }
    fetchPhotos();
  }, [request, user])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data) {
    return (
      <ul className={`animeLeft ${styles.feedContainer}`}>
        {data?.map(photo => (
          <FeedPhotosItem 
            key={photo.id} 
            photo={photo} 
            setModalPhoto={setModalPhoto} 
          />
        ))}
      </ul>
    )
  } else return null

}

export default FeedPhotos