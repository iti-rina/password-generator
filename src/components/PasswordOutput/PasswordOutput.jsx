import styles from "./PasswordOutput.module.css";

const PasswordOutput = ({ password }) => {

  const copyToClipboard = () => {
    const copyText = document.getElementById("ps");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value).then(() => {
      alert("Password copied to clipboard");
    })
  }

  return (
    <div className={styles.output}>
      <span className={styles.output__header}>Your password</span>
      <div className={styles.output__resultLine}>
        <input 
          type="text"
          id="ps" 
          value={password}
          className={styles.output__text}
          placeholder="It will be here"
          readOnly
          />

        <button onClick={copyToClipboard} className={styles.output__copyBtn}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.75195 0C3.23317 0 2.00195 1.23122 2.00195 2.75V10.25C2.00195 11.7688 3.23317 13 4.75195 13H10.2482C11.7669 13 12.9982 11.7688 12.9982 10.25V2.75C12.9982 1.23122 11.7669 0 10.2482 0H4.75195ZM3.50195 2.75C3.50195 2.05964 4.0616 1.5 4.75195 1.5H10.2482C10.9385 1.5 11.4982 2.05964 11.4982 2.75V10.25C11.4982 10.9404 10.9385 11.5 10.2482 11.5H4.75195C4.0616 11.5 3.50195 10.9404 3.50195 10.25V2.75Z" fill="#333333"/>
            <path d="M15.5 5.5C15.5 5.08579 15.1642 4.75 14.75 4.75C14.3358 4.75 14 5.08579 14 5.5V10.7472C14 12.5422 12.5449 13.9972 10.75 13.9972H6.5C6.08579 13.9972 5.75 14.333 5.75 14.7472C5.75 15.1615 6.08579 15.4972 6.5 15.4972H10.75C13.3734 15.4972 15.5 13.3706 15.5 10.7472V5.5Z" fill="#333333"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PasswordOutput;