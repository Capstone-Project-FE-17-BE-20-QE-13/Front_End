import { ReactNode } from "react";
// import { useAuthCookie } from "../utils/contexts/newAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  // const { tokenCookie } = useAuthCookie();
  const [cookies] = useCookies<any>(["id", "token", "role"]);
  const { pathname } = useLocation();

  const authProtected = ["/logincandidate", "/logincompany", "/role", "/candidate", "/company"];
  const protectedByToken = ["/chat", "/profilecompany", "/profileuser", "/daftarlowongan", "/daftarpelamar/:id", "/riwayatlamaran", "/lowongantersimpan"];
  const companyProtected = ["/profilecompany", "/daftarlowongan", "/daftarpelamar/:id"];
  const jobseekerProtected = ["/profileuser", "/riwayatlamaran", "/lowongantersimpan"];

  if (authProtected.includes(pathname)) {
    if (cookies.token) return <Navigate to={"/"} />;
  }
  if (protectedByToken.includes(pathname)) {
    if (!cookies.token) return <Navigate to="/role" />;

    if (companyProtected.includes(pathname)) {
      if (cookies.role == "jobseeker") return <Navigate to="/" />;
    }
    if (jobseekerProtected.includes(pathname)) {
      if (cookies.role == "company") return <Navigate to="/admin/users" />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
