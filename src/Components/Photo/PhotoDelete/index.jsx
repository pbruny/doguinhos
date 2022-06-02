import React from 'react';
import { PHOTO_DELETE } from '../../../Api/api';
import useFetch from '../../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleDelete() {
    const confirm = window.confirm('Tem certeza que deseja deletar a foto?');
    if(confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) {
        window.location.reload();
      }
    }

  }

  return (
    <>
      {loading ? (
      <button disabled onClick={handleDelete} className={styles.deleteButton}>
        Deletando...
      </button>
      ) : (
        <button onClick={handleDelete} className={styles.deleteButton}>
        Deletar
      </button>
      )}
    </>
  );
};

export default PhotoDelete;
