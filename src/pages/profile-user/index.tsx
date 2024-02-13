import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { FaPlus } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { useAuth } from "../../utils/contexts/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { CareersType, JsType, jobseekerSchema } from "../../utils/apis/jobseekers/types";
import { useForm } from "react-hook-form";
import { updateUser } from "../../utils/apis/jobseekers/api";
import Swal from "sweetalert2";
import { IoMdDocument } from "react-icons/io";
import axiosWithConfig from "../../utils/apis/axiosWithConfig";

const ProfileUser = () => {
  const { js } = useAuth();
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [careers, setCareers] = useState<CareersType[]>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(jobseekerSchema),
    defaultValues: {
      full_name: "",
      username: "",
      password: "",
      email: "",
      address: "",
      phone: "",
      birth_date: "",
      gender: "",
      resume: "",
    },
  });

  useEffect(() => {
    setValue("full_name", js?.full_name as string);
    setValue("username", js?.username as string);
    setValue("email", js?.email as string);
    setValue("address", js?.address as string);
    setValue("phone", js?.phone as string);
    setValue("birth_date", js?.birth_date as string);
    setValue("gender", js?.gender as string);
    setValue("resume", js?.resume as string);
  }, [js]);

  const handleUpdateProfile = async (body: JsType) => {
    console.log(body);
    try {
      const result = await updateUser(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    } catch (error) {
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
        <div className="mx-20 my-16">
          <div className="flex gap-8 mb-10">
            <div className="avatar">
              <div className="w-56 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-3xl font-bold">{js.full_name}</h1>
              <p className="font-bold">{js.email}</p>
              <div className="flex gap-20">
                <div className="flex gap-10 my-10">
                  <div>
                    <p>Alamat</p>
                    <p>Kontak</p>
                  </div>
                  <div>
                    <p>{js.address}</p>
                    <p>{js.phone}</p>
                  </div>
                </div>
                <div className="flex gap-10 my-10">
                  <div>
                    <p>Jenis Kelamin</p>
                    <p>Tanggal Lahir</p>
                  </div>
                  <div>
                    <p>{js.gender}</p>
                    <p>{js.birth_date}</p>
                  </div>
                  <button className="w-[80px] h-10 p-1 rounded-md bg-secondary text-white" onClick={() => document.getElementById("my_modal_1").showModal()}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-bold mb-3">Ringkasan Pribadi</h1>
          <p className="mb-5 text-justify">{js.resume}</p>
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Riwayat Karir</h1>
            <button onClick={() => document.getElementById("my_modal_2").showModal()}>
              <FaPlus className="text-2xl text-success" />
            </button>
          </div>
          <div className="flex justify-around p-2 w-full border rounded-sm my-5">
            <h1>Posisi</h1>
            <h1>Nama Perusahaan</h1>
            <h1>Mulai</h1>
            <h1>Berakhir</h1>
            <button>
              <IoTrash className="text-2xl text-red-500" />
            </button>
          </div>
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Pendidikan</h1>
            <button onClick={() => document.getElementById("my_modal_3").showModal()}>
              <FaPlus className="text-2xl text-success" />
            </button>
          </div>
          <div className="flex justify-around p-2 w-full border rounded-sm my-5">
            <h1>Tingkat Pendidikan</h1>
            <h1>Jurusan</h1>
            <h1>Tahun Lulus</h1>
            <h1></h1>
            <button>
              <IoTrash className="text-2xl text-red-500" />
            </button>
          </div>
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Lisensi & Sertifikasi</h1>
            <button onClick={() => document.getElementById("my_modal_4").showModal()}>
              <FaPlus className="text-2xl text-success" />
            </button>
          </div>
          <div className="flex justify-around p-2 w-full border rounded-sm my-5">
            <h1>Nama Lisensi</h1>
            <h1>Tanggal Terbit</h1>
            <h1>Tanggal Kadaluarsa</h1>
            <h1></h1>
            <button>
              <IoTrash className="text-2xl text-red-500" />
            </button>
          </div>
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Keahlian</h1>
            <button onClick={() => document.getElementById("my_modal_5").showModal()}>
              <FaPlus className="text-2xl text-success" />
            </button>
          </div>
          <div className="flex justify-around p-2 w-full border rounded-sm my-5">
            <h1>Nama Keahlian</h1>
            <h1>Deskripsi</h1>
            <h1></h1>
            <h1></h1>
            <button>
              <IoTrash className="text-2xl text-red-500" />
            </button>
          </div>
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">CV</h1>
            <button onClick={() => document.getElementById("my_modal_6").showModal()}>
              <FaPlus className="text-2xl text-success" />
            </button>
          </div>
          <div className="flex justify-around p-2 w-full border rounded-sm my-5">
            <h1>CV</h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <button>
              <IoTrash className="text-2xl text-red-500" />
            </button>
          </div>
        </div>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Data Company</h3>
            <form method="dialog" className="flex flex-col gap-5" onSubmit={handleSubmit(handleUpdateProfile)}>
              <input type="text" {...register("full_name")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Lengkap" />
              <input type="text" {...register("username")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Username" />
              <input type="email" {...register("email")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Email" />
              <input type="password" {...register("password")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Password" />
              <input type="text" {...register("address")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Alamat" />
              <input type="text" {...register("phone")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Kontak" />
              <label htmlFor="ttl">
                Tanggal Lahir
                <input type="date" {...register("birth_date")} id="ttl" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <div className="flex gap-4 mb-3">
                Gender
                <label htmlFor="male">
                  <input className="me-2" type="radio" value="Laki-laki" {...register("gender")} id="male" name="gender" />
                  Laki-laki
                </label>
                <label htmlFor="female">
                  <input className="me-2" type="radio" value="Perempuan" {...register("gender")} id="female" name="gender" />
                  Perempuan
                </label>
              </div>
              <textarea id="resume" {...register("resume")} placeholder="Resume" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
              <input type="submit" value="Edit" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
            </form>

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
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Riwayat Karir</h3>
            <form method="dialog" className="flex flex-col gap-5">
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Posisi" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Perusahaan" />
              <label htmlFor="mulai">
                Mulai
                <input type="date" id="mulai" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <label htmlFor="berakhir">
                Berakhir
                <input type="date" id="berakhir" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <input type="submit" value="Tambah" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Pendidikan</h3>
            <form method="dialog" className="flex flex-col gap-5">
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Tingkat Pendidikan" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Tahun Lulus" />
              <label htmlFor="lulus">
                Tahun Lulus
                <input type="date" id="lulus" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <input type="submit" value="Tambah" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Lisensi & Sertifikasi</h3>
            <form method="dialog" className="flex flex-col gap-5">
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Lisensi" />
              <label htmlFor="terbit">
                Tanggal Terbit
                <input type="date" id="terbit" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <label htmlFor="kadaluarsa">
                Tanggal Kadaluarsa
                <input type="date" id="kadaluarsa" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <input type="submit" value="Tambah" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_5" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Keahlian</h3>
            <form method="dialog" className="flex flex-col gap-5">
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Keahlian" />
              <textarea id="deskripsi" placeholder="Deskripsi" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
              <input type="submit" value="Tambah" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_6" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Curiculum Vitae</h3>
            <form className="flex flex-col gap-5">
              <label htmlFor="cv" className="w-full h-[100px] flex flex-col justify-center items-center shadow-md rounded-md cursor-pointer">
                Add CV
                <IoMdDocument className="text-xl" />
              </label>
              <input type="file" id="cv" className="hidden" />
              <input type="submit" placeholder="Tambah" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </Layout>
    </>
  );
};

export default ProfileUser;
