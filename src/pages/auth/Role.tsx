import loginImage from "../../assets/login-image.png";
import { Link } from "react-router-dom";

const Role = () => {
  return (
    <div className="w-full h-screen xl:h-[120vh] bg-main flex justify-center items-center p-5">
      <div className="bg-white flex flex-col justify-center items-center rounded-xl h-[550px] w-3/5">
        <h1 className="font-bold text-xl text-center">
          Selamat Datang di{" "}
          <Link to={"/"} className="text-primary hover:text-secondary">
            JobHuntz!
          </Link>
        </h1>
        <img src={loginImage} alt="" />
        <div className="w-full flex justify-around flex-wrap">
          <div className="flex flex-col justify-center gap-3 border border-slate-500 rounded-xl md:py-6 md:px-3 xl:py-12 xl:px-8">
            <h1 className="font-bold text-xl">Saya sedang mencari Pekerjaan</h1>
            <p className="text-center font-semibold">Buat akun pencari kerja</p>
            <Link to={"/candidate"}>
              <button className="bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 text-white w-full md:py-2 md:px-16 rounded-md drop-shadow-md">Candidate Sign Up</button>
            </Link>
            <p className="text-center font-semibold">
              Sudah punya akun?{" "}
              <Link to={"/logincandidate"} className="text-primary hover:text-secondary">
                Masuk
              </Link>
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 border border-slate-500 rounded-xl md:py-6 md:px-3 xl:py-12 xl:px-8">
            <h1 className="font-bold text-xl">Saya sedang mencari Kandidat</h1>
            <p className="text-center font-semibold">Buat akun perusahaan</p>
            <Link to={"/company"}>
              <button className="bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 text-white w-full md:py-2 md:px-16 rounded-md drop-shadow-md">Employee Hiring</button>
            </Link>
            <p className="text-center font-semibold">
              Sudah punya akun?{" "}
              <Link to={"/logincompany"} className="text-primary hover:text-secondary">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
