import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";

function App() {
  return (
    <div className="App">
      App pAGE
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}   />
          <Route path="/register" element={<Register/>}   />

          <Route path="/login" element={<Login/>}   />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
