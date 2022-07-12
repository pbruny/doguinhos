import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as Dogs} from '../../Assets/dogs-footer.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <Dogs />
    <p>Doguinhos maravilhosos</p>
  </footer>
)

export default Footer