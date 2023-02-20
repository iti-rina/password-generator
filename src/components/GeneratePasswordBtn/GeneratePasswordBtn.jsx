import styles from "./GeneratePasswordBtn.module.css";

const GeneratePasswordBtn = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.generate__btn}>Generate password</button>
    );
}

export default GeneratePasswordBtn;