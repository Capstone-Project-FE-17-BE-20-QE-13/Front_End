import Layout from "../../components/Layout";
import { IoMdChatboxes } from "react-icons/io";

const DaftarPelamar = () => {
  return (
    <>
      <Layout>
        <div className="mx-20 my-10">
          <h1 className="text-2xl font-bold mb-5">Daftar Pelamar</h1>
          <div className="w-full mb-5">
            <div className="flex justify-between items-center p-5 border rounded-md">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold">John Doe</h1>
              </div>
              <h1>Back End Engineer</h1>
              <select name="size" id="size" className="p-2 w-48 border rounded-md outline-none">
                <option value="" disabled selected>
                  Status
                </option>
                <option value="inreview">Inreview</option>
                <option value="interview">Interview</option>
                <option value="diterima">Diterima</option>
                <option value="ditolak">Ditolak</option>
              </select>
              <button>
                <IoMdChatboxes className="text-3xl" />
              </button>
            </div>
          </div>
          <div className="w-full mb-5">
            <div className="flex justify-between items-center p-5 border rounded-md">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold">John Doe</h1>
              </div>
              <h1>Back End Engineer</h1>
              <select name="size" id="size" className="p-2 w-48 border rounded-md outline-none">
                <option value="" disabled selected>
                  Status
                </option>
                <option value="inreview">Inreview</option>
                <option value="interview">Interview</option>
                <option value="diterima">Diterima</option>
                <option value="ditolak">Ditolak</option>
              </select>
              <button>
                <IoMdChatboxes className="text-3xl" />
              </button>
            </div>
          </div>
          <div className="w-full mb-5">
            <div className="flex justify-between items-center p-5 border rounded-md">
              <div className="flex gap-5 items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold">John Doe</h1>
              </div>
              <h1>Back End Engineer</h1>
              <select name="size" id="size" className="p-2 w-48 border rounded-md outline-none">
                <option value="" disabled selected>
                  Status
                </option>
                <option value="inreview">Inreview</option>
                <option value="interview">Interview</option>
                <option value="diterima">Diterima</option>
                <option value="ditolak">Ditolak</option>
              </select>
              <button>
                <IoMdChatboxes className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DaftarPelamar;
