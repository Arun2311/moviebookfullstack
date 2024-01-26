import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { RegisterPage } from "./Pages/RegisterPage";
import { LoginPage } from "./Pages/LoginPage";
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
          <Route path="/home" element={<HomePage/>}   />
          <Route path="/register" element={<RegisterPage/>}   />

          <Route path="/login" element={<LoginPage/>}   />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
