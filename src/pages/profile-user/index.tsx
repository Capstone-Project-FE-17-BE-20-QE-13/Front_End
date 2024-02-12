import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { FaPlus } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { useAuth } from "../../utils/contexts/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobseekerSchema } from "../../utils/apis/jobseekers/types";
import { useForm } from "react-hook-form";

const ProfileUser = () => {
  const { js } = useAuth();
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
            <button>
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
            <button>
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
            <button>
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
            <button>
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
            <button>
              <FaPlus className="text-2xl text-success" />
            </button>
          </div>
          <div className="flex justify-around p-2 w-full border rounded-sm my-5">
            <h1 className="grow">CV</h1>
            <button>
              <IoTrash className="text-2xl text-red-500" />
            </button>
          </div>
        </div>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Data Company</h3>
            <form className="flex flex-col gap-5">
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Lengkap" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Username" />
              <input type="email" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Email" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Alamat" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Kontak" />
              <label htmlFor="ttl">
                Tanggal Lahir
                <input type="date" id="ttl" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <label>Jenis Kelamin</label>
              <label className="label cursor-pointer">
                <span className="label-text">Laki-laki</span>
                <input type="radio" name="radio-10" value="Laki-laki" className="radio checked:bg-blue-500" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Perempuan</span>
                <input type="radio" name="radio-10" value="Perempuan" className="radio checked:bg-blue-500" />
              </label>
              <textarea name="resume" id="resume" placeholder="Resume" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
              <input type="submit" placeholder="Edit" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
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
