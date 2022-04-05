import styles from './Button.module.css'

const Button = ({ children, ...rest }) => (
  <button className={styles.button} {...rest}>
    {children}
  </button>
)

export default Button
