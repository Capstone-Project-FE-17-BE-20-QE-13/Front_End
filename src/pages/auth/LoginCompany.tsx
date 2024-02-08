import React from "react";
import loginImage from "../../assets/login-image.png";

const LoginCompany = () => {
  return (
    <div className="w-full h-full bg-main p-20">
      <div className="flex flex-col justify-center items-center">
        <img src={loginImage} className="mb-5" />
        <div className="py-5 px-8 sm:py-[35px] sm:px-[90px] bg-white rounded-lg">
          <div className="my-5">
            <h1 className="text-2xl font-semibold mb-4">Masuk</h1>
            <p className="font-semibold">Masuk sebagai perusahaan</p>
          </div>
          <form className="flex flex-col gap-3">
            <input type="email" className="p-2 sm:p-[13px] sm:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Email" />
            <input type="password" className="p-2 sm:p-[13px] sm:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Password" />
            <input type="submit" className="p-2 sm:p-[13px] sm:w-[320px] bg-secondary text-white rounded-xl drop-shadow-md outline-none my-5" value="Login" />
          </form>
          <p className="text-center">Tidak punya akun? Daftar</p>
        </div>
      </div>
    </div>
  );
};

export default LoginCompany;
