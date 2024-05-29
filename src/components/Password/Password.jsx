import { useState } from "react";

export function Password({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <h3>Twoje hasło:</h3>
      <input type={isVisible ? "text" : "password"} value={children} readOnly />
      <button onClick={() => setIsVisible((prevState) => !prevState)}>
        {isVisible ? "Ukryj" : "Pokaż"}
      </button>
      <button
        onClick={() => {
          // copy password to clipboard
          navigator.clipboard.writeText(children);
          alert("Skopiowano do schowka!");
        }}
      >
        Kopiuj
      </button>
    </>
  );
}
