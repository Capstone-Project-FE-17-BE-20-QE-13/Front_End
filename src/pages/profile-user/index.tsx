import React from "react";
import Layout from "../../components/Layout";
import { FaPlus } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const ProfileUser = () => {
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
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="font-bold">john.doe@gmail.com</p>
              <div className="flex gap-20">
                <div className="flex gap-10 my-10">
                  <div>
                    <p>Alamat</p>
                    <p>Kontak</p>
                  </div>
                  <div>
                    <p>Bandung, Jawa Barat</p>
                    <p>081234123412</p>
                  </div>
                </div>
                <div className="flex gap-10 my-10">
                  <div>
                    <p>Jenis Kelamin</p>
                    <p>Tanggal Lahir</p>
                  </div>
                  <div>
                    <p>Laki-laki</p>
                    <p>7 Januari 1998</p>
                  </div>
                  <button className="w-[80px] h-10 p-1 rounded-md bg-secondary text-white" onClick={() => document.getElementById("my_modal_2").showModal()}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-bold mb-3">Ringkasan Pribadi</h1>
          <p className="mb-5 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quae explicabo repellendus eius quidem doloremque quos dicta, exercitationem provident doloribus rerum libero mollitia aut dolorum aliquid autem esse. Excepturi
            accusantium consequuntur a id nobis, labore repudiandae optio! Rerum eius excepturi totam facere placeat neque, nam maiores error consectetur dolorem laudantium provident ipsa animi aspernatur temporibus? Maiores, architecto.
            Qui eligendi asperiores, magni dolor laudantium doloremque suscipit aliquid officiis possimus error corporis expedita dicta quod hic. Quia, soluta praesentium! Optio, aliquid ipsa. Placeat earum dolores consequatur aliquam
            consectetur at dolorum beatae fugiat qui tempora libero quo, numquam corrupti maxime exercitationem esse magni.
          </p>
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
      </Layout>
    </>
  );
};

export default ProfileUser;
