import React from "react";
import Layout from "../../components/Layout";

const Detail = () => {
  return (
    <>
      <Layout>
        <div className="mx-5 my-5 sm:mx-20 sm:my-10">
          <div className="w-full h-[200px] rounded-md mb-10">
            <img src="https://source.unsplash.com/random?job" className="w-full h-full object-cover rounded-md" alt="" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Programmer</h1>
          <div className="sm:w-[400px]">
            <div className="grid grid-cols-2 gap-5">
              <p className="font-semibold">PT Software Indonesia</p>
              <p>(500 Employees)</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p>Alamat</p>
              <p>Surabaya, Jawa Timur</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p>Jenis Pekerjaan</p>
              <p>( Full-Time )</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p>Estimasi Gaji</p>
              <p>Rp.6.000.000</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p>Website</p>
              <p>softwareindonesia.com</p>
            </div>
          </div>
          <div className="flex gap-3 my-5">
            <button className="w-[80px] p-1 rounded-md bg-secondary text-white">Lamar</button>
            <button className="w-[80px] p-1 rounded-md bg-main text-white">Simpan</button>
          </div>
          <h1 className="text-xl font-bold mb-3">Deskripsi</h1>
          <p className="mb-5 text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quae explicabo repellendus eius quidem doloremque quos dicta, exercitationem provident doloribus rerum libero mollitia aut dolorum aliquid autem esse. Excepturi
            accusantium consequuntur a id nobis, labore repudiandae optio! Rerum eius excepturi totam facere placeat neque, nam maiores error consectetur dolorem laudantium provident ipsa animi aspernatur temporibus? Maiores, architecto.
            Qui eligendi asperiores, magni dolor laudantium doloremque suscipit aliquid officiis possimus error corporis expedita dicta quod hic. Quia, soluta praesentium! Optio, aliquid ipsa. Placeat earum dolores consequatur aliquam
            consectetur at dolorum beatae fugiat qui tempora libero quo, numquam corrupti maxime exercitationem esse magni.
          </p>
          <h1 className="text-xl font-bold mb-3">Job Requirement</h1>
          <p className="mb-5 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae accusamus praesentium, est eius facere temporibus magni dicta accusantium numquam harum voluptate ducimus doloribus modi quod a vero. Quod laborum, explicabo
            dolorem rerum vitae at ipsa odit non libero ad placeat vel consequatur ut alias vero labore voluptates voluptatibus eveniet doloribus quo illum unde sequi! Omnis expedita sit nesciunt facilis architecto hic exercitationem
            laudantium, earum incidunt reprehenderit? Quidem, vero! Tempora eaque commodi enim aspernatur quae error tenetur dolore repellendus, laudantium facilis! Corporis repudiandae delectus ipsa velit laudantium cum soluta eos veniam.
            Necessitatibus consequatur quo doloribus nisi veniam fugit molestiae, pariatur quis reprehenderit voluptatum perferendis quisquam atque esse dignissimos odio aut officia repellat. Praesentium, quas minima. Odio quos at nostrum
            similique sint facere explicabo possimus fugit impedit assumenda alias aliquid minus, voluptate velit quibusdam voluptatem tempore sunt vel ex facilis praesentium soluta numquam omnis! Ad nesciunt labore quos odit illum!
            Explicabo, soluta!
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Detail;
