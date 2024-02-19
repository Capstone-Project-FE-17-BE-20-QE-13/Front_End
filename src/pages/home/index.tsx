import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { getAllVacancies } from "../../utils/apis/vacancy/api";
import { AllVacancies } from "../../utils/apis/vacancy/types";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/contexts/auth";

const Home = () => {
  const { token } = useAuth();
  const [vacancies, setVacancies] = useState<AllVacancies[]>([]);
  const [noOfElement, setNoOfElement] = useState<number>(7);
  const data = vacancies.slice(0, noOfElement);
  useEffect(() => {
    fetchAllVacancies();
  }, []);

  const loadMoreHandle = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  const fetchAllVacancies = async () => {
    try {
      const result = await getAllVacancies();
      setVacancies(result.data);
    } catch (error: any) {
      (error as Error).message;
    }
  };

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
          {data &&
            data.map((item, index) =>
              token != ""
                ? item.status == "Dibuka" && (
                    <Link to={`/detail/${item.id}`}>
                      <Card position={item.name} company_name={item.job_type} address="Jakarta" salary_range={item.salary_range} key={index} />
                    </Link>
                  )
                : item.status == "Dibuka" && (
                    <Link to={`/logincandidate`}>
                      <Card position={item.name} company_name={item.job_type} address="Jakarta" salary_range={item.salary_range} key={index} />
                    </Link>
                  )
            )}
          <div className="w-full p-3 text-center shadow-md bg-primary rounded-md my-5 cursor-pointer active:bg-blue-600" onClick={loadMoreHandle}>
            <h1 className="font-bold text-white">Load More</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
