import styles from "./GeneratePasswordBtn.module.css";

const GeneratePasswordBtn = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.btn}>Generate password</button>
    );
}

export default GeneratePasswordBtn;