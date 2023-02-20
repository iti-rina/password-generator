import styles from "./CustomCheckbox.module.css";

const CustomCheckbox = ({ title, name, checked, onChange }) => {
  return (
    <label>
        <input
          className={styles.checkbox__input}
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          />

        <span className={styles.checkbox__text}>
          {title}
        </span>
      </label>
  );
}

export default CustomCheckbox;