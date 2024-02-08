import { BrowserRouter, Route, Routes } from "react-router-dom";
import Role from "../pages/auth/Role";
import Candidate from "../pages/auth/Candidate";
import Company from "../pages/auth/Company";
import Home from "../pages/home";
import Detail from "../pages/detail";
import LoginCandidate from "../pages/auth/LoginCandidate";
import LoginCompany from "../pages/auth/LoginCompany";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logincandidate" element={<LoginCandidate />} />
        <Route path="/logincompany" element={<LoginCompany />} />
        <Route path="/role" element={<Role />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/company" element={<Company />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
