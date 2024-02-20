import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { IoIosCloseCircle, IoIosOpen } from "react-icons/io";
import { VacancyType, vacanciesSchema } from "../../utils/apis/vacancy/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addVacancy, editVacancy, getDetailVacancy, getMyVacancies } from "../../utils/apis/vacancy/api";
import Swal from "sweetalert2";
import axiosWithConfig from "../../utils/apis/axiosWithConfig";
import { useAuthCompany } from "../../utils/contexts/auth_company";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const DaftarLowongan = () => {
  const { company } = useAuthCompany();
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [vacancies, setVacancies] = useState<VacancyType[]>();
  const [detailVacancy, setDetailVacancies] = useState<Partial<VacancyType>>({});
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    // formState: { errors },
  } = useForm<VacancyType>({
    resolver: zodResolver(vacanciesSchema),
    defaultValues: {
      id: 0,
      company_id: 0,
      name: "",
      address: "",
      job_type: "",
      salary_range: "",
      category: "",
      job_desc: "",
      job_req: "",
      status: "",
    },
  });

  // console.log(vacancies);

  useEffect(() => {
    setValue("company_id", company?.id as number);
    setValue("id", detailVacancy?.id as number);
    setValue("name", detailVacancy?.name as string);
    setValue("address", detailVacancy?.address as string);
    setValue("address", detailVacancy?.address as string);
    setValue("job_type", detailVacancy?.job_type as string);
    setValue("salary_range", detailVacancy?.salary_range as string);
    setValue("category", detailVacancy?.category as string);
    setValue("job_desc", detailVacancy?.job_desc as string);
    setValue("job_req", detailVacancy?.job_req as string);
    setValue("status", detailVacancy?.status as string);
  }, [company, detailVacancy]);

  const handleAddVacancy = async (body: VacancyType) => {
    console.log(body);
    try {
      const result = await addVacancy(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      reset();
    } catch (error: any) {
      console.log((error as Error).message);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleEditVacancy = async (body: VacancyType) => {
    console.log(body);
    console.log(body.id);
    try {
      const result = await editVacancy(body.id, body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      reset();
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleDeleteVacancy = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosWithConfig
          .delete(`vacancy/${id}`)
          .then((res) => {
            console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "Data has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err.response));
      }
    });
  };

  useEffect(() => {
    getDataVacancies();
  }, [vacancies]);

  const getDataVacancies = async () => {
    try {
      const result = await getMyVacancies();
      setVacancies(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailVacancies = async (id: number) => {
    console.log(id);
    try {
      const result = await getDetailVacancy(id);
      setDetailVacancies(result?.data);
      console.log("detail = ", result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>JobHuntz | Daftar Lowongan</title>
      </Helmet>
      <Layout>
        <div className="mx-20 my-10">
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Daftar Lowongan</h1>
            <label htmlFor="my_modal_7" className="btn bg-transparent">
              <FaPlus className="text-2xl text-success" />
            </label>
          </div>
          {vacancies &&
            vacancies.map((value: any, index: any) => (
              <div key={index} className="w-full mb-5">
                <div className="flex justify-between items-center p-5 border rounded-md">
                  <div>
                    <h1 className="text-xl font-bold">{value.name}</h1>
                    <div className="flex gap-5">
                      <p>{value.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {value.status == "Dibuka" ? (
                      <label onClick={() => getDetailVacancies(value.id)} htmlFor="my_modal_8" className="btn bg-transparent p-0 border-none shadow-none hover:bg-transparent">
                        <IoIosCloseCircle className="text-3xl" />
                      </label>
                    ) : (
                      <label onClick={() => getDetailVacancies(value.id)} htmlFor="my_modal_8" className="btn bg-transparent p-0 border-none shadow-none hover:bg-transparent">
                        <IoIosOpen className="text-3xl" />
                      </label>
                    )}
                    <Link to={`/daftarpelamar/${value.id}`}>
                      <div className="badge badge-neutral">daftar pelamar</div>
                    </Link>
                    <button onClick={() => handleDeleteVacancy(value.id)}>
                      <FaTrashAlt className="text-2xl text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Tambah Lowongan</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleAddVacancy)}>
              <input type="text" {...register("name")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Posisi" />
              <input type="text" {...register("job_type")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Tipe Pekerjaan" />
              <input type="text" {...register("address")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Alamat" />
              <input type="text" {...register("salary_range")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Estimasi Gaji" />
              <select id="category" {...register("category")} className="p-2 rounded-md drop-shadow-md outline-none">
                <option value="" disabled selected>
                  Bidang Pekerjaan
                </option>
                <option value="tik">Teknologi Informasi dan Komputer</option>
                <option value="kesehatan">Kesehatan</option>
                <option value="keuangan">Keuangan dan Perbankan</option>
                <option value="arsitektur">Arsitektur dan Teknik</option>
                <option value="seni">Seni dan Desain</option>
                <option value="hiburan">Hiburan dan Olahraga</option>
                <option value="pemasaran">Pemasaran dan Periklanan</option>
                <option value="manajemen">Manajemen</option>
                <option value="perkantoran">Administrasi Perkantoran</option>
              </select>
              <textarea id="deskripsi" {...register("job_desc")} placeholder="Deskripsi" className="p-2 rounded-md drop-shadow-md outline-none" cols={30} rows={5}></textarea>
              <textarea id="requirement" {...register("job_req")} placeholder="Kualifikasi" className="p-2 rounded-md drop-shadow-md outline-none" cols={30} rows={5}></textarea>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>tambah lowongan berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! tambah lowongan gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Tambah" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>

        <input type="checkbox" id="my_modal_8" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Status</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleEditVacancy)}>
              <select id="category" {...register("status")} className="p-2 rounded-md drop-shadow-md outline-none">
                <option value="Dibuka">Dibuka</option>
                <option value="Ditutup">Ditutup</option>
              </select>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>edit status berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! edit status gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Edit" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label onClick={() => setDetailVacancies({})} className="modal-backdrop" htmlFor="my_modal_8">
            Close
          </label>
        </div>
      </Layout>
    </>
  );
};

export default DaftarLowongan;
