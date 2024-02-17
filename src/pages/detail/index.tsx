import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { getDetailVacancy } from "../../utils/apis/vacancy/api";
import { VacancyType } from "../../utils/apis/vacancy/types";
import Swal from "sweetalert2";
import { addToFavorite } from "../../utils/apis/favorite/api";

const Detail = () => {
  const { id } = useParams();
  const [vacancyData, setVacancyData] = useState<Partial<VacancyType>>({});

  useEffect(() => {
    getDetail(id);
  }, [vacancyData]);

  const getDetail = async (id: number | any) => {
    try {
      const result = await getDetailVacancy(id);
      setVacancyData(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavoriteHandle = async (id: number | any) => {
    console.log(id);
    try {
      const result = await addToFavorite(id);
      console.log(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `lowongan disimpan`,
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `gagal menyimpan lowongan`,
      });
    }
  };

  return (
    <>
      <Layout>
        <div className="mx-5 my-5 sm:mx-20 sm:my-10">
          <div className="w-full h-[200px] rounded-md mb-10">
            <img src="https://source.unsplash.com/random?job" className="w-full h-full object-cover rounded-md" alt="" />
          </div>
          <h1 className="text-3xl font-bold mb-3">{vacancyData.name}</h1>
          <div className="sm:w-[400px]">
            <div className="grid grid-cols-2 gap-5">
              <p>Kategori</p>
              <p>{vacancyData.category}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p>Jenis Pekerjaan</p>
              <p>{vacancyData.job_type}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p>Estimasi Gaji</p>
              <p>{vacancyData.salary_range}</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p>Website</p>
              <p>softwareindonesia.com</p>
            </div>
          </div>
          <div className="flex gap-3 my-5">
            <button className="w-[80px] p-1 rounded-md bg-secondary text-white">Lamar</button>
            <button className="w-[80px] p-1 rounded-md bg-main text-white" onClick={() => addToFavoriteHandle(vacancyData.id)}>
              Simpan
            </button>
          </div>
          <h1 className="text-xl font-bold mb-3">Deskripsi</h1>
          <p className="mb-5 text-justify">{vacancyData.job_desc}</p>
          <h1 className="text-xl font-bold mb-3">Job Requirement</h1>
          <p className="mb-5 text-justify">{vacancyData.job_req}</p>
        </div>
      </Layout>
    </>
  );
};

export default Detail;
