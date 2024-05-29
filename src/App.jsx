import { useState } from "react";
import styles from "./App.module.css";
import { Password } from "./components/Password/Password";
import { Form } from "./components/Form/Form";

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

function App() {
  const [password, setPassword] = useState(false);

  function generateNewPassword(passParams) {
    const passLength = passParams.passLength;
    let characters = lowerCaseLetters;
    let newPassword = "";
    let guaranteedCharacters = ""; // gwarantowane znaki, które wystąpią w haśle

    if (passParams.isSpecialChars) {
      characters += specialChars;
      guaranteedCharacters +=
        specialChars[Math.floor(Math.random() * specialChars.length)];
    }

    if (passParams.isNumbers) {
      characters += numbers;
      guaranteedCharacters +=
        numbers[Math.floor(Math.random() * numbers.length)];
    }

    if (passParams.isBigLetters) {
      characters += upperCaseLetters;
      guaranteedCharacters +=
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    }

    newPassword += guaranteedCharacters;

    for (let i = guaranteedCharacters.length; i < passLength; i++) {
      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(newPassword);
  }
  return (
    <>
      <div className={styles.container}>
        <Form generateNewPassword={generateNewPassword} />
        {password && <Password>{password}</Password>}
      </div>
    </>
  );
}

export default App;
