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
    passParams.isSpecialChars ? (characters += specialChars) : "";
    passParams.isNumbers ? (characters += numbers) : "";
    passParams.isBigLetters ? (characters += upperCaseLetters) : "";

    for (let i = 0; i < passLength; i++) {
      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(newPassword);
  }
  console.log(`password: ${password}`);
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
