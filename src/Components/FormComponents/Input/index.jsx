import styles from './Input.module.css'

const Input = ({ label, type, name }) => (
  <div className={styles.inputWrapper}>
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <input className={styles.input} type={type} id={name} name={name} />
    <p className={styles.error}>Erro</p>
  </div>
)

export default Input
