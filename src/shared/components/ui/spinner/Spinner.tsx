import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.containerLoader}>
      <span className={styles.loader}></span>
    </div>
  )
}
