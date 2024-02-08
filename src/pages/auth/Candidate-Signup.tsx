import React from "react";
import imageRegister from "../../assets/register-image.png";

const Candidate = () => {
  return (
    <div className="flex flex-wrap justify-between h-screen bg-main">
      <div className="bg-white h-full w-full md:w-2/6 flex flex-col justify-center items-center md:rounded-r-[35px]">
        <div className="lg:w-[320px] mb-5">
          <h1 className="text-xl font-semibold">Candidate Sign Up</h1>
          <p>Create your candidate account</p>
        </div>
        <form className="flex flex-col gap-3">
          <input type="text" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Full Name" />
          <input type="email" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Email" />
          <input type="password" className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Password" />
          <input type="submit" className="p-2 lg:p-[13px] lg:w-[320px] bg-secondary text-white rounded-xl drop-shadow-md outline-none mb-4 mt-16" value="Register" />
        </form>
        <div>
          <p className="text-center">Already have an account? Sign In</p>
        </div>
      </div>
      <div className="my-auto">
        <img src={imageRegister} className="xl:w-full md:w-[500px]" alt="" />
      </div>
    </div>
  );
};

export default Candidate;
