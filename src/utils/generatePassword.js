export function generatePassword(length, useNumbers = false, useSymbols = false) {
  const DEFAULT_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  const SYMBOLS = "!@#$%^&*()";

  let usedChars = DEFAULT_CHARS;
  if (useNumbers && !useSymbols) {
    usedChars +=  NUMBERS;
  } else if (!useNumbers && useSymbols) {
    usedChars += SYMBOLS;
  } else if (useNumbers && useSymbols) {
    usedChars = SYMBOLS + usedChars + NUMBERS;
  }

  const keysForPassword = new Uint32Array(length);
  window.crypto.getRandomValues(keysForPassword);

  let passwordGenerated = "";
  for (let i = 0; i < length; i++) {
    passwordGenerated += usedChars[keysForPassword[i] % usedChars.length];
  }

  return passwordGenerated;
}
