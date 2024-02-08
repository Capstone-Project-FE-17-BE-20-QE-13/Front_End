import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Role from "../pages/auth/Role";
import Candidate from "../pages/auth/Candidate-Signup";
import Company from "../pages/auth/Company";
import Home from "../pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role" element={<Role />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
