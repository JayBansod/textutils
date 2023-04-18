import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("dark"); // for dark mode
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("enable dark mode");
      showAlert("Dark mode is on ", "dark");
    } else {
      setMode("light");
      console.log("enable light mode");
      showAlert("Light mode is on ", "success");
    }
  };
  return (
    <>
      <div
        className={`bg-${mode === "dark" ? "dark" : "light"} text-${
          mode === "dark" ? "light" : "dark"
        }`}
      >
        <Alert alert={alert} />

        <Navbar
          title="TextUtils"
          li1="Home"
          li2="About us"
          btn="Search"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Navbar />
        <div className="container">
          <Textform heading="Enter the text to Analyze" showAlert={showAlert} />
        </div>
      </div>
    </>
  );
}

export default App;
