import "./App.css";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import FormFile from "./Components/FormFile";
import Final from "./Components/Final";
import Spinner from "./Components/Spinner";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/sp" element={<Spinner />} />

        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/form-file" element={<FormFile />} />
        <Route exact path="/form-final" element={<Final />} />

      </Routes>
    </div>
  );
}

export default App;
