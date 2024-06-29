import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignup";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginSignup />}></Route>
          <Route exact path="/loginsignup" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
