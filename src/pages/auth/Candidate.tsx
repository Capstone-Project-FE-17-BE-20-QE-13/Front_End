import imageRegister from "../../assets/register-image.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserRegisterType, userRegisterSchema } from "../../utils/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegister } from "../../utils/apis/auth/api";
import Swal from "sweetalert2";

const Candidate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>({ resolver: zodResolver(userRegisterSchema) });

  const handleUserRegister = async (body: UserRegisterType) => {
    try {
      const result = await userRegister(body);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${result.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/logincandidate");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${"Email sudah terdaftar"}`,
      });
    }
  };

  return (
    <div className="flex flex-wrap justify-between h-screen bg-main">
      <div className="bg-white h-full w-full md:w-2/6 flex flex-col justify-center items-center md:rounded-r-[35px]">
        <div className="lg:w-[320px] mb-5">
          <h1 className="text-xl font-semibold">Candidate Sign Up</h1>
          <p>Create your candidate account</p>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleUserRegister)}>
          <input type="text" {...register("full_name")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Full Name" />
          {errors.full_name && <p className="text-sm text-red-500 -mt-3">{errors.full_name.message}</p>}
          <input type="email" {...register("email")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Email" />
          {errors.email && <p className="text-sm text-red-500 -mt-3">{errors.email.message}</p>}
          <input type="text" {...register("username")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Username" />
          {errors.username && <p className="text-sm text-red-500 -mt-3">{errors.username.message}</p>}
          <input type="password" {...register("password")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Password" />
          {errors.password && <p className="text-sm text-red-500 -mt-3">{errors.password.message}</p>}
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
