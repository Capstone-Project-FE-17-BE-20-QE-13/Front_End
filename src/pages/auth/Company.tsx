import React from "react";
import imageRegister from "../../assets/register-image.png";

const Company = () => {
  return (
    <div className="flex flex-wrap justify-between h-screen bg-main">
      <div className="my-auto">
        <img src={imageRegister} className="xl:w-full md:w-[500px]" alt="" />
      </div>
      <div className="bg-white h-full w-full md:w-2/6 flex flex-col justify-center items-center sm:rounded-l-[35px]">
        <div className="lg:w-[320px] mb-5">
          <h1 className="text-xl font-semibold">Company Sign Up</h1>
          <p>Buat akun perusahaanmu</p>
        </div>
        <form className="flex flex-col gap-3">
          <div className="overflow-scroll h-[300px] p-2 flex flex-col gap-3 register-form">
            <input type="text" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Full Name" />
            <input type="email" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Email" />
            <input type="password" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Password" />
            <input type="text" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Company Name" />
            <input type="text" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Company Type" />
            <input type="text" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Website URL" />
            <select name="size" id="size" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none">
              <option value="" disabled selected>
                Company Size
              </option>
              <option value="middle">1-250 employees</option>
              <option value="high">250+ employees</option>
            </select>
          </div>
          <input type="submit" className="p-2 lg:p-[13px] lg:w-[320px] bg-secondary text-white rounded-xl drop-shadow-md outline-none mb-4 mt-5" value="Register" />
        </form>
        <div>
          <p className="text-center">Sudah Punya Akun? Masuk</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
