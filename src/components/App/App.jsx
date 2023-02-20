import React, { useState } from "react";
import Header from "../Header/Header";
import PasswordLength from "../PasswordLength/PasswordLength";
import CharactersUsed from "../CharactersUsed/CharactersUsed";
import GeneratePasswordBtn from "../GeneratePasswordBtn/GeneratePasswordBtn";
import PasswordOutput from "../PasswordOutput/PasswordOutput";

import { generatePassword } from "../../utils/generatePassword";

import styles from "./App.module.css";

const App = () => {
  const [passwordLength, setPasswordLength] = useState(4);
  const handleChange = (value) => {
    setPasswordLength(value);
    setGeneratedPassword(generatePassword(passwordLength, useNumbers, useSymbols))
  }

  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);

  const handleCheckChars = (field) => {
    if (field === "numbers") {
      setUseNumbers(!useNumbers);
    } else {
      setUseSymbols(!useSymbols);
    }
  }

  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGeneratePassword = () => {
    let password = generatePassword(passwordLength, useNumbers, useSymbols);
    setGeneratedPassword(password);
  }

  return (
    <div className={styles.app}>
      <Header />
      <PasswordLength length={passwordLength} onChange={handleChange} />
      <CharactersUsed useNumbers={useNumbers} useSymbols={useSymbols} onChange={handleCheckChars} />
      <GeneratePasswordBtn onClick={handleGeneratePassword} />
      <PasswordOutput password={generatedPassword} />
    </div>
  );
}

export default App;