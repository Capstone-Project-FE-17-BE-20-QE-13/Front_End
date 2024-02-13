import React from "react";
import loginImage from "../../assets/login-image.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginType, loginSchema } from "../../utils/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyLogin } from "../../utils/apis/auth/api";
import Swal from "sweetalert2";

const LoginCompany = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({ resolver: zodResolver(loginSchema) });

  const handleLogin = async (body: LoginType) => {
    try {
      const result = await companyLogin(body);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `successful login as ${result.email}`,
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/profilecompany");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${(error as Error).message}`,
      });
    }
  };
  return (
    <div className="w-full h-full bg-main p-20">
      <div className="flex flex-col justify-center items-center">
        <img src={loginImage} className="mb-5" />
        <div className="py-5 px-8 sm:py-[35px] sm:px-[90px] bg-white rounded-lg">
          <div className="my-5">
            <h1 className="text-2xl font-semibold mb-4">Masuk</h1>
            <p className="font-semibold">Masuk sebagai perusahaan</p>
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleLogin)}>
            <input type="email" {...register("email")} className="p-2 sm:p-[13px] sm:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Email" />
            {errors.email && <p className="text-sm text-red-500 -mt-3">{errors.email.message}</p>}
            <input type="password" {...register("password")} className="p-2 sm:p-[13px] sm:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Password" />
            {errors.password && <p className="text-sm text-red-500 -mt-3">{errors.password.message}</p>}
            <input type="submit" className="p-2 sm:p-[13px] sm:w-[320px] bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 text-white rounded-xl drop-shadow-md outline-none my-5" value="Login" />
          </form>
          <p className="text-center">Tidak punya akun? Daftar</p>
        </div>
      </div>
    </div>
  );
};

export default LoginCompany;
