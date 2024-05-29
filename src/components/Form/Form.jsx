import { useState } from "react";
import styles from "./Form.module.css";

export function Form({ generateNewPassword }) {
  const [passParams, setPassParams] = useState({
    passLength: 3,
    isSpecialChars: false,
    isNumbers: false,
    isBigLetters: false,
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        generateNewPassword(passParams);
      }}
    >
      <label htmlFor="passLength">Długość hasła:</label>
      <input
        type="number"
        name="passLength"
        id="passLength"
        min="3"
        defaultValue={3}
        onChange={(event) => {
          const newPassLength = Number(event.target.value);
          setPassParams((prevParams) => ({
            ...prevParams,
            passLength: newPassLength,
          }));
        }}
      />
      <div className={styles.checkboxes}>
        <div>
          <input
            type="checkbox"
            name="specialChars"
            id="specialChars"
            onChange={(event) => {
              const newSpecialCharsValue = event.target.checked;
              setPassParams((prevParams) => ({
                ...prevParams,
                isSpecialChars: newSpecialCharsValue,
              }));
            }}
          />
          <label htmlFor="specialChars">Znaki specjalne</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            onChange={(event) => {
              const newIsNumbersValue = event.target.checked;
              setPassParams((prevParams) => ({
                ...prevParams,
                isNumbers: newIsNumbersValue,
              }));
            }}
          />
          <label htmlFor="numbers">Numery</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="bigLetters"
            id="bigLetters"
            onChange={(event) => {
              const newIsBigLettersValue = event.target.checked;
              setPassParams((prevParams) => ({
                ...prevParams,
                isBigLetters: newIsBigLettersValue,
              }));
            }}
          />
          <label htmlFor="bigLetters">Wielkie litery</label>
        </div>
      </div>
      <button>Generuj hasło</button>
    </form>
  );
}
