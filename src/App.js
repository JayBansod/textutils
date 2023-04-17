import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
function App() {
  return (
    <>
      <Navbar title="TextUtils" li1="Home" li2="About us" btn="Search" />
      <Navbar />
      <div className="container">
        <Textform heading="Enter the text to Analyze" />
      </div>
    </>
  );
}

export default App;
