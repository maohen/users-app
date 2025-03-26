import { ITitle } from './ITitle';
import styles from './Title.module.scss';

export const Title = (props:ITitle) => {

  const {name} = props;

  return (
    <h1 className={`${styles.title} font-size-2 font-bold`}>{name}</h1>
  )
}