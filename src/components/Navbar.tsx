import { useAuth } from "../utils/contexts/auth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token, changeToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    changeToken();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Berhasil keluar`,
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/role");
  };

  return (
    <>
      <div className="navbar bg-main px-10">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl text-white">
            JobHuntz
          </Link>
        </div>
        {token ? (
          <div className="flex-none">
            <ul className="hidden sm:flex gap-5 text-white mx-5">
              <li>
                <Link to={"/lowongantersimpan"}>Disimpan</Link>
              </li>
              <li>
                <Link to={"/riwayatlamaran"}>Riwayat</Link>
              </li>
              <li>
                <Link to={"/chat"}>Pesan</Link>
              </li>
            </ul>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to={"/profileuser"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex-none">
            <Link to={"/role"} className="btn bg-[#FE7A36] border-none text-white">
              Daftar
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
