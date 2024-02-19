import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoTrash } from "react-icons/io5";
import { FavoriteType } from "../../utils/apis/favorite/types";
import { getFavorite } from "../../utils/apis/favorite/api";
import axiosWithConfig from "../../utils/apis/axiosWithConfig";
import Swal from "sweetalert2";
import jobVacancy from "../../assets/job-vacancy.jpg";

const LowonganTersimpan = () => {
  const [favoriteData, setFavoriteData] = useState<FavoriteType[]>();

  useEffect(() => {
    getData();
  }, [favoriteData]);

  const getData = async () => {
    try {
      const result = await getFavorite();
      setFavoriteData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandle = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosWithConfig
          .delete(`favorit/${id}`)
          .then((res) => {
            console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "Data has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => console.log(err.response));
      }
    });
  };

  return (
    <>
      <Layout>
        <div className="mx-20 my-10">
          <h1 className="text-2xl font-bold mb-5">Lowongan Tersimpan</h1>
          {favoriteData &&
            favoriteData.map((value: any, index: any) => (
              <div key={index} className="w-full flex items-center my-6 p-[20px] border shadow-md rounded-md gap-5">
                <div className="w-[100px] h-[100px]">
                  <img src={jobVacancy} className="h-full object-cover" alt="" />
                </div>
                <div className="flex flex-col gap-5 grow">
                  <div>
                    <h1 className="text-md font-bold">{value.position}</h1>
                    <p>{value.company_name}</p>
                  </div>
                </div>
                <button onClick={() => deleteHandle(value.id)}>
                  <IoTrash className="text-2xl text-red-500" />
                </button>
              </div>
            ))}
        </div>
      </Layout>
    </>
  );
};

export default LowonganTersimpan;
