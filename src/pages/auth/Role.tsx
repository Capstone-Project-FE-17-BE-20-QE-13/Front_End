import React from "react";
import loginImage from "../../assets/login-image.png";

const Role = () => {
  return (
    <div className="w-full h-screen xl:h-[120vh] bg-main flex justify-center items-center p-5">
      <div className="bg-white flex flex-col justify-center items-center rounded-xl h-[550px] w-3/5">
        <h1 className="font-bold text-xl text-center">Selamat Datang di JobHuntz!</h1>
        <img src={loginImage} alt="" />
        <div className="w-full flex justify-around flex-wrap">
          <div className="flex flex-col justify-center gap-3 border border-slate-500 rounded-xl md:py-6 md:px-3 xl:py-12 xl:px-8">
            <h1 className="font-bold text-xl">Saya sedang mencari Pekerjaan</h1>
            <p className="text-center font-semibold">Buat akun pencari kerja</p>
            <button className="bg-secondary text-white md:py-2 md:px-16 rounded-md drop-shadow-md">Candidate Sign Up</button>
            <p className="text-center font-semibold">Sudah punya akun? Masuk</p>
          </div>
          <div className="flex flex-col justify-center gap-3 border border-slate-500 rounded-xl md:py-6 md:px-3 xl:py-12 xl:px-8">
            <h1 className="font-bold text-xl">Saya sedang mencari Kandidat</h1>
            <p className="text-center font-semibold">Buat akun perusahaan</p>
            <button className="bg-secondary text-white md:py-2 md:px-16 rounded-md drop-shadow-md">Employee Hiring</button>
            <p className="text-center font-semibold">Sudah punya akun? Masuk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;
