import { Icon } from "../";
import icons from "../../../assets/icons/index";
import { IInput } from "./IInput";
import styles from "./Input.module.scss";

export const Input = (props: IInput) => {
  const { type, placeholder, handleSearch } = props;
  return (
    <div className={styles.containerInput}>
      <Icon source={icons.Search} className={styles.iconSearch} />
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        title={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};
