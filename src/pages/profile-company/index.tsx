import Layout from "../../components/Layout";
import { MdVerified } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
// import { useAuthCompany } from "../../utils/contexts/auth_company";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanyType, companySchema } from "../../utils/apis/company/types";
import { useEffect, useState } from "react";
import { updateCompany } from "../../utils/apis/company/api";
// import { useAuthCookieCompany } from "../../utils/contexts/newAuth_company";
import { useAuthCookie } from "../../utils/contexts/newAuth";

const ProfileCompany = () => {
  // const { company } = useAuthCookieCompany();
  const { company } = useAuthCookie();
  const [isSuccess, setIsSuccess] = useState<string>("");
  const { register, handleSubmit, setValue } = useForm<CompanyType>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      id: 0,
      full_name: "",
      email: "",
      company_name: "",
      address: "",
      phone: "",
      company_size: "",
      company_type: "",
      website: "",
      banners: "",
      status_verification: "",
      description: "",
    },
  });

  useEffect(() => {
    setValue("id", company?.id as number);
    setValue("full_name", company?.full_name as string);
    setValue("email", company?.email as string);
    setValue("company_name", company?.company_name as string);
    setValue("address", company?.address as string);
    setValue("phone", company?.phone as string);
    setValue("company_size", company?.company_size as string);
    setValue("company_type", company?.company_type as string);
    setValue("website", company?.website as string);
    setValue("banners", company?.banners as string);
    setValue("status_verification", company?.status_verification as string);
    setValue("description", company?.description as string);
  }, [company]);

  const handleUpdateCompany = async (body: CompanyType) => {
    const data = body;
    if (data.banners == company.banners) {
      delete data.banners;
    }
    if (data.status_verification == company.status_verification) {
      delete data.status_verification;
    }

    console.log("data = ", data.banners[0]);

    try {
      const result = await updateCompany(data);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
        // window.location.reload();
      }, 3000);
      // fetchCompany();
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };
  return (
    <>
      <Layout>
        <div className="mx-5 my-5 sm:mx-20 sm:my-10">
          <div className="w-full h-[200px] rounded-md mb-10">
            <img src={`${company.banners}`} className="w-full h-full object-cover rounded-md" alt="" />
          </div>
          <div className="flex items-center gap-5 mb-10">
            <div>
              <h1 className="text-3xl font-bold">{company.company_name}</h1>
              <p>{company.email}</p>
            </div>
            <MdVerified className="text-3xl text-teal-300" />
          </div>
          <div className="flex gap-5 mb-10">
            <div>
              <p>Nama</p>
              <p>Alamat</p>
              <p>Kontak</p>
              <p>Pegawai</p>
              <p>Website</p>
            </div>
            <div>
              <p>{company.full_name}</p>
              <p>{company.address == "" ? <span>empty</span> : <span>{company.address}</span>} </p>
              <p>{company.phone == "" ? <span>empty</span> : <span>{company.phone}</span>}</p>
              <p>
                {(() => {
                  if (company.company_size == "middle") {
                    return <span>1-250 employees</span>;
                  } else if (company.company_size == "high") {
                    return <span>250+ employees</span>;
                  } else {
                    return <div></div>;
                  }
                })()}
              </p>
              <p>{company.website}</p>
            </div>
            <label htmlFor="my_modal_7" className="btn w-[80px] h-10 p-1 rounded-md bg-secondary text-white">
              Edit
            </label>
          </div>
          <h1 className="text-xl font-bold mb-3">Deskripsi</h1>
          <p className="mb-5 text-justify">{company.description}</p>
        </div>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Data Company</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleUpdateCompany)}>
              <label htmlFor="banner" className="w-full h-[100px] flex flex-col justify-center items-center shadow-md rounded-md cursor-pointer">
                Add Banner
                <RiImageAddFill className="text-xl" />
              </label>
              <input type="file" id="banner" {...register("banners")} className="hidden" />
              <input type="text" {...register("company_name")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Company" />
              <input type="email" {...register("email")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Email" />
              <input type="text" {...register("full_name")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Admin" />
              <input type="text" {...register("address")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Alamat" />
              <input type="text" {...register("phone")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Kontak" />
              <input type="text" {...register("company_type")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Tipe Company" />
              <select {...register("company_size")} id="size" className="p-2 rounded-md drop-shadow-md outline-none">
                <option value="middle">1-250 employees</option>
                <option value="high">250+ employees</option>
              </select>
              <input type="text" {...register("website")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Website" />
              <textarea {...register("description")} id="deskripsi" placeholder="Deskripsi Perusahaan" className="p-2 rounded-md drop-shadow-md outline-none" cols={30} rows={5}></textarea>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>edit profil berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! edit profil gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" placeholder="Edit" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </Layout>
    </>
  );
};

export default ProfileCompany;
