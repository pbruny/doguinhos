import React from 'react';
import Image from '../../../Image';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photoItem} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.photoViz}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
