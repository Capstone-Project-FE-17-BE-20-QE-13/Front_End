import React from "react";
import Layout from "../../components/Layout";
import { FaPlus, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const DaftarLowongan = () => {
  return (
    <>
      <Layout>
        <div className="mx-20 my-10">
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Daftar Lowongan</h1>
            <button onClick={() => document.getElementById("my_modal_2").showModal()}>
              <FaPlus className="text-2xl text-success" />
            </button>
          </div>
          <div className="w-full mb-5">
            <div className="flex justify-between p-5 border rounded-md">
              <div>
                <h1 className="text-xl font-bold">Staff IT</h1>
                <div className="flex gap-5">
                  <p>Jumlah Pelamar: 5</p>
                  <p>Lowongan Dibuka</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button>
                  <IoIosCloseCircle className="text-3xl" />
                </button>
                <button onClick={() => document.getElementById("my_modal_3").showModal()}>
                  <FaRegEdit className="text-3xl text-blue-400" />
                </button>
                <button>
                  <FaTrashAlt className="text-2xl text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mb-5">
            <div className="flex justify-between p-5 border rounded-md">
              <div>
                <h1 className="text-xl font-bold">Staff IT</h1>
                <div className="flex gap-5">
                  <p>Jumlah Pelamar: 5</p>
                  <p>Lowongan Dibuka</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button>
                  <IoIosCloseCircle className="text-3xl" />
                </button>
                <button onClick={() => document.getElementById("my_modal_3").showModal()}>
                  <FaRegEdit className="text-3xl text-blue-400" />
                </button>
                <button>
                  <FaTrashAlt className="text-2xl text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mb-5">
            <div className="flex justify-between p-5 border rounded-md">
              <div>
                <h1 className="text-xl font-bold">Staff IT</h1>
                <div className="flex gap-5">
                  <p>Jumlah Pelamar: 5</p>
                  <p>Lowongan Dibuka</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button>
                  <IoIosCloseCircle className="text-3xl" />
                </button>
                <button onClick={() => document.getElementById("my_modal_3").showModal()}>
                  <FaRegEdit className="text-3xl text-blue-400" />
                </button>
                <button>
                  <FaTrashAlt className="text-2xl text-red-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Tambah Lowongan</h3>
            <form className="flex flex-col gap-5">
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Posisi" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Tipe Pekerjaan" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Estimasi Gaji" />
              <select name="size" id="size" className="p-2 rounded-md drop-shadow-md outline-none">
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
              <textarea name="deskripsi" id="deskripsi" placeholder="Deskripsi" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
              <textarea name="requirement" id="requirement" placeholder="Kualifikasi" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
              <input type="submit" placeholder="tambah" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Lowongan</h3>
            <form className="flex flex-col gap-5">
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Posisi" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Tipe Pekerjaan" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Estimasi Gaji" />
              <select name="size" id="size" className="p-2 rounded-md drop-shadow-md outline-none">
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
              <textarea name="deskripsi" id="deskripsi" placeholder="Deskripsi" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
              <textarea name="requirement" id="requirement" placeholder="Kualifikasi" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
              <input type="submit" placeholder="tambah" className="w-28 bg-secondary p-3 rounded-md text-white self-end" />
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

export default DaftarLowongan;
