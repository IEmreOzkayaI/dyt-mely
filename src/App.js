import "./App.css";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Final from "./Components/Final";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/final" element={<Final />} />
      </Routes>
    </div>
  );
}

export default App;
