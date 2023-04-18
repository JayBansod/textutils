import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  const [mode, setMode] = useState("dark"); // for dark mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      console.log("enable dark mode");
    } else {
      setMode("light");
      console.log("enable light mode");
    }
  };
  return (
    <>
      <div
        className={`bg-${mode === "dark" ? "dark" : "light"} text-${
          mode === "dark" ? "light" : "dark"
        }`}
      >
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
          <Textform heading="Enter the text to Analyze" />
        </div>
      </div>
    </>
  );
}

export default App;
