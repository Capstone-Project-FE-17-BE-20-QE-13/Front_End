import React from "react";
import Layout from "../../components/Layout";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="my-10">
          <form className="flex justify-center gap-5">
            <input type="text" className="p-2 rounded-xl drop-shadow-md outline-none" placeholder="Cari Lowongan" />
            <select name="size" id="size" className="p-2 rounded-xl drop-shadow-md outline-none">
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
            <input type="text" className="p-2 rounded-xl drop-shadow-md outline-none" placeholder="Lokasi" />
            <input type="submit" className="py-2 px-5 bg-secondary text-white rounded-xl drop-shadow-md outline-none" value="Cari" />
          </form>
        </div>
        <div className="mx-20">
          <h1 className="text-2xl font-bold">Lowongan Terkini</h1>
          <div className="w-full flex my-6 p-[20px] border shadow-md rounded-md gap-5">
            <div className="w-[150px] h-[150px]">
              <img src="https://source.unsplash.com/random?job" className="h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col gap-5 grow">
              <div>
                <h1 className="text-md font-bold">Staff IT</h1>
                <p>PT. Kimia Farma</p>
              </div>
              <div>
                <p>Surabaya, Jawa Timur</p>
                <p>Rp 5.000.000 - Rp 5.500.000</p>
              </div>
            </div>
            <div>
              <IoBookmark className="text-2xl" />
            </div>
          </div>
          <div className="w-full flex my-6 p-[20px] border shadow-md rounded-md gap-5">
            <div className="w-[150px] h-[150px]">
              <img src="https://source.unsplash.com/random?job" className="h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col gap-5 grow">
              <div>
                <h1 className="text-md font-bold">Staff IT</h1>
                <p>PT. Kimia Farma</p>
              </div>
              <div>
                <p>Surabaya, Jawa Timur</p>
                <p>Rp 5.000.000 - Rp 5.500.000</p>
              </div>
            </div>
            <div>
              <IoBookmarkOutline className="text-2xl" />
            </div>
          </div>
          <div className="w-full flex my-6 p-[20px] border shadow-md rounded-md gap-5">
            <div className="w-[150px] h-[150px]">
              <img src="https://source.unsplash.com/random?job" className="h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col gap-5 grow">
              <div>
                <h1 className="text-md font-bold">Staff IT</h1>
                <p>PT. Kimia Farma</p>
              </div>
              <div>
                <p>Surabaya, Jawa Timur</p>
                <p>Rp 5.000.000 - Rp 5.500.000</p>
              </div>
            </div>
            <div>
              <IoBookmarkOutline className="text-2xl" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
