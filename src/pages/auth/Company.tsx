import imageRegister from "../../assets/register-image.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CompanyRegisterType, companyRegisterSchema } from "../../utils/apis/auth/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { companyRegister } from "../../utils/apis/auth/api";
import Swal from "sweetalert2";

const Company = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyRegisterType>({ resolver: zodResolver(companyRegisterSchema) });

  const handleCompanyRegister = async (body: CompanyRegisterType) => {
    try {
      const result = await companyRegister(body);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${result.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/logincompany");
    } catch (error: any) {
      console.log(error as Error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };

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
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleCompanyRegister)}>
          <div className="overflow-scroll h-[300px] p-2 flex flex-col gap-3 register-form">
            <input type="text" {...register("full_name")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Full Name" />
            {errors.full_name && <p className="text-sm text-red-500 -mt-3">{errors.full_name.message}</p>}
            <input type="email" {...register("email")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Email" />
            {errors.email && <p className="text-sm text-red-500 -mt-3">{errors.email.message}</p>}
            <input type="password" {...register("password")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Password" />
            {errors.password && <p className="text-sm text-red-500 -mt-3">{errors.password.message}</p>}
            <input type="text" {...register("company_name")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Company Name" />
            {errors.company_name && <p className="text-sm text-red-500 -mt-3">{errors.company_name.message}</p>}
            <input type="text" {...register("company_type")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Company Type" />
            {errors.company_type && <p className="text-sm text-red-500 -mt-3">{errors.company_type.message}</p>}
            <input type="text" {...register("website")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none" placeholder="Website URL" />
            {errors.website && <p className="text-sm text-red-500 -mt-3">{errors.website.message}</p>}
            <select id="size" {...register("company_size")} className="p-2 lg:p-[13px] lg:w-[320px] rounded-xl drop-shadow-md outline-none">
              <option disabled selected>
                Company Size
              </option>
              <option value="middle">1-250 employees</option>
              <option value="high">250+ employees</option>
            </select>
            {errors.company_size && <p className="text-sm text-red-500 -mt-3">{errors.company_size.message}</p>}
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
