import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
