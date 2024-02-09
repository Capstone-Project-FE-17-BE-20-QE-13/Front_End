import React from "react";
import Layout from "../../components/Layout";
import { IoSend } from "react-icons/io5";

const Chatting = () => {
  return (
    <>
      <Layout>
        <div className="my-10 mx-16 h-[70vh]">
          <h1 className="text-2xl font-bold">Pesan</h1>
          <div className="flex h-full justify-between">
            <div className="w-[20%] flex flex-col gap-4 p-3 border border-slate-400 rounded-md">
              <div className="w-full p-2 border border-slate-400 rounded-sm">PT. Software Indonesia</div>
            </div>
            <div className="w-[79%] flex flex-col border border-slate-400 rounded-md">
              <div className="w-full h-14 p-3 border-b border-slate-400 flex items-center">PT. Software Indonesia</div>
              <div className="flex-grow p-5 overflow-scroll message-body">
                <div className="w-[45%] text-justify p-2 bg-slate-300 rounded-md">Halo selamat saudara telah maju ke tahap interview kira kira jika di interview pada tanggal 10 apakah anda bersedia?</div>
                <div className="w-[45%] text-justify p-2 bg-slate-300 rounded-md ms-auto">Halo siap saya bersedia</div>
                <div className="w-[45%] text-justify p-2 bg-slate-300 rounded-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus voluptates reiciendis iure, totam voluptas eius blanditiis id doloremque error, tenetur esse numquam ratione perferendis maxime! Suscipit unde dolor
                  vitae!
                </div>
                <div className="w-[45%] text-justify p-2 bg-slate-300 rounded-md ms-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore quae eum hic porro. Laudantium eligendi recusandae dignissimos inventore iure magnam vel itaque rem assumenda numquam at maxime aliquam, repellendus
                  soluta dicta quasi et officia eveniet error laboriosam sit eum. Natus quod officia corporis architecto nulla consequatur dolorem, eum a?
                </div>
              </div>
              <div className="w-full h-12 border-t border-slate-400">
                <form className="flex justify-between items-center p-1 gap-2">
                  <input type="text" className="flex-grow p-2 focus:outline-none bg-gray-200 rounded-md" placeholder="Type Something Here..." />
                  <button>
                    <IoSend className="text-3xl" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Chatting;
