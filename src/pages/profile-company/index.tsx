import React from "react";
import Layout from "../../components/Layout";
import { MdVerified } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";

const ProfileCompany = () => {
  return (
    <>
      <Layout>
        <div className="mx-5 my-5 sm:mx-20 sm:my-10">
          <div className="w-full h-[200px] rounded-md mb-10">
            <img src="https://source.unsplash.com/random?job" className="w-full h-full object-cover rounded-md" alt="" />
          </div>
          <div className="flex items-center gap-5 mb-10">
            <div>
              <h1 className="text-3xl font-bold">PT. Software Engineer</h1>
              <p>info@softwareengineer.com</p>
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
              <p>John Doe</p>
              <p>Surabaya, Jawa Timur</p>
              <p>081234123412</p>
              <p>250+ employees</p>
              <p>softwareengineer.com</p>
            </div>
            <button className="w-[80px] h-10 p-1 rounded-md bg-secondary text-white" onClick={() => document.getElementById("my_modal_2").showModal()}>
              Edit
            </button>
          </div>
          <h1 className="text-xl font-bold mb-3">Deskripsi</h1>
          <p className="mb-5 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quae explicabo repellendus eius quidem doloremque quos dicta, exercitationem provident doloribus rerum libero mollitia aut dolorum aliquid autem esse. Excepturi
            accusantium consequuntur a id nobis, labore repudiandae optio! Rerum eius excepturi totam facere placeat neque, nam maiores error consectetur dolorem laudantium provident ipsa animi aspernatur temporibus? Maiores, architecto.
            Qui eligendi asperiores, magni dolor laudantium doloremque suscipit aliquid officiis possimus error corporis expedita dicta quod hic. Quia, soluta praesentium! Optio, aliquid ipsa. Placeat earum dolores consequatur aliquam
            consectetur at dolorum beatae fugiat qui tempora libero quo, numquam corrupti maxime exercitationem esse magni.
          </p>
        </div>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Data Company</h3>
            <form className="flex flex-col gap-5">
              <label htmlFor="banner" className="w-full h-[100px] flex flex-col justify-center items-center shadow-md rounded-md cursor-pointer">
                Add Banner
                <RiImageAddFill className="text-xl" />
              </label>
              <input type="file" id="banner" className="hidden" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Company" />
              <input type="email" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Email" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Admin" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Alamat" />
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Kontak" />
              <select name="size" id="size" className="p-2 rounded-md drop-shadow-md outline-none">
                <option value="" disabled selected>
                  Company Size
                </option>
                <option value="middle">1-250 employees</option>
                <option value="high">250+ employees</option>
              </select>
              <input type="text" className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Website" />
              <textarea name="deskripsi" id="deskripsi" placeholder="Deskripsi Perusahaan" className="p-2 rounded-md drop-shadow-md outline-none" cols="30" rows="5"></textarea>
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

export default ProfileCompany;
