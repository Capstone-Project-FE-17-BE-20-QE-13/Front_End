import { BrowserRouter, Route, Routes } from "react-router-dom";
import Role from "../pages/auth/Role";
import Candidate from "../pages/auth/Candidate";
import Company from "../pages/auth/Company";
import Home from "../pages/home";
import Detail from "../pages/detail";
import LoginCandidate from "../pages/auth/LoginCandidate";
import LoginCompany from "../pages/auth/LoginCompany";
import Chatting from "../pages/chat";
import ProfileCompany from "../pages/profile-company";
import DaftarLowongan from "../pages/daftar-lowongan";
import DaftarPelamar from "../pages/daftar-pelamar";
import ProfileUser from "../pages/profile-user";
import RiwayatLamaran from "../pages/riwayat-lamaran";
import LowonganTersimpan from "../pages/lowongan-tersimpan";

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
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/chat" element={<Chatting />} />
        <Route path="/profilecompany" element={<ProfileCompany />} />
        <Route path="/profileuser" element={<ProfileUser />} />
        <Route path="/daftarlowongan" element={<DaftarLowongan />} />
        <Route path="/daftarpelamar/:id" element={<DaftarPelamar />} />
        <Route path="/riwayatlamaran" element={<RiwayatLamaran />} />
        <Route path="/lowongantersimpan" element={<LowonganTersimpan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
