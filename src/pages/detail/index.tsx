import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Vacancies } from "../../utils/apis/vacancy/types";
import { getVacancies } from "../../utils/apis/vacancy/api";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams()
  const [vacancy, setVacancy] = useState<Vacancies>();
  useEffect(() => {
    fetchVacancies();
  }, []);

  const fetchVacancies = async () => {
    try {
      const result = await getVacancies(id as string);
      setVacancy(result.data);
    } catch (error: any) {
      (error as Error).message;
    }
  };

  return (
    <>
      <Layout>
        
            <div className="mx-5 my-5 sm:mx-20 sm:my-10" >
              <div className="w-full h-[200px] rounded-md mb-10">
                <img
                  src="https://source.unsplash.com/random?job"
                  className="w-full h-full object-cover rounded-md"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-bold mb-3">posisi</h1>
              <div className="sm:w-[400px]">
                <div className="grid grid-cols-2 gap-5">
                  <p className="font-semibold">nama company</p>
                  <p>500 Employees</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <p>Alamat</p>
                  <p>{vacancy?.address}</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <p>Jenis Pekerjaan</p>
                  <p>{vacancy?.job_type}</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <p>Estimasi Gaji</p>
                  <p>{vacancy?.salary_range}</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <p>Website</p>
                  <p>{vacancy?.website}</p>
                </div>
              </div>
              <div className="flex gap-3 my-5">
                <button className="w-[80px] p-1 rounded-md bg-secondary text-white">
                  Lamar
                </button>
                <button className="w-[80px] p-1 rounded-md bg-main text-white">
                  Simpan
                </button>
              </div>
              <h1 className="text-xl font-bold mb-3">Deskripsi</h1>
              <p className="mb-5 text-justify">
                {vacancy?.description}
              </p>
              <h1 className="text-xl font-bold mb-3">Job Requirement</h1>
              <p className="mb-5 text-justify">
                {vacancy?.requirement}
              </p>
            </div>
         
      </Layout>
    </>
  );
};

export default Detail;
