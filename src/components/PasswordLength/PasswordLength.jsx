import styles from "./PasswordLength.module.css";

const PasswordLength = ({length, onChange}) => {
  return (
    <div>
      <label className={styles.length__container}>
        Length
        <input 
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => onChange(e.target.value)}
          className={styles.length__numInput}
        />
        <input 
          type="range"
          min="4"
          max="20"
          step="1"
          value={length}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default PasswordLength;