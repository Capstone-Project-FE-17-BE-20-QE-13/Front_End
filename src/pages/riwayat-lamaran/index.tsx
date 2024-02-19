import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoMdChatboxes } from "react-icons/io";
import { getHistoryApplication } from "../../utils/apis/applications/api";
import { HistoryApplication } from "../../utils/apis/applications/types";
import jobVacancy from "../../assets/job-vacancy.jpg";

const RiwayatLamaran = () => {
  const [history, setHistory] = useState<HistoryApplication[]>([]);
  useEffect(() => {
    fetchHistoryApplication();
  }, []);

  const fetchHistoryApplication = async () => {
    try {
      const result = await getHistoryApplication();
      setHistory(result.data);
    } catch (error: any) {
      (error as Error).message;
    }
  };
  return (
    <>
      <Layout>
        <div className="mx-20 my-10">
          <h1 className="text-2xl font-bold mb-5">Riwayat Lamaran</h1>
          {history &&
            history.map((item, index) => (
              <div className="w-full flex items-center my-6 p-[20px] border shadow-md rounded-md gap-5" key={index}>
                <div className="w-[100px] h-[100px]">
                  <img src={jobVacancy} className="h-full object-cover" alt="" />
                </div>
                <div className="flex flex-col gap-5 grow">
                  <div>
                    <h1 className="text-md font-bold">{item.position}</h1>
                    <p>{item.company_name}</p>
                  </div>
                </div>
                <button>
                  <IoMdChatboxes className="text-3xl" />
                </button>
                <h1 className="font-semibold">{item.stat_app}</h1>
              </div>
            ))}
          {/* <div className="w-full flex items-center my-6 p-[20px] border shadow-md rounded-md gap-5">
            <div className="w-[100px] h-[100px]">
              <img src="https://source.unsplash.com/random?job" className="h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col gap-5 grow">
              <div>
                <h1 className="text-md font-bold">Staff IT</h1>
                <p>PT. Kimia Farma</p>
              </div>
            </div>
            <button>
              <IoMdChatboxes className="text-3xl" />
            </button>
            <h1 className="font-semibold">Status</h1>
          </div>
          <div className="w-full flex items-center my-6 p-[20px] border shadow-md rounded-md gap-5">
            <div className="w-[100px] h-[100px]">
              <img src="https://source.unsplash.com/random?job" className="h-full object-cover" alt="" />
            </div>
            <div className="flex flex-col gap-5 grow">
              <div>
                <h1 className="text-md font-bold">Staff IT</h1>
                <p>PT. Kimia Farma</p>
              </div>
            </div>
            <button>
              <IoMdChatboxes className="text-3xl" />
            </button>
            <h1 className="font-semibold">Status</h1>
          </div> */}
        </div>
      </Layout>
    </>
  );
};

export default RiwayatLamaran;
