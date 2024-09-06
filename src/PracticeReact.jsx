import { useState } from "react";
import "./practiceReact.css";

function ToggleDarkMode() {
  const [darkMode, setToDarkMode] = useState(false);

  const toggle = () => {
    setToDarkMode(!darkMode);
  };

  return (
    <>
      <div className={darkMode ? "dark-mode" : ""}>
        <button onClick={toggle}>
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </>
  );
}

export default ToggleDarkMode;
