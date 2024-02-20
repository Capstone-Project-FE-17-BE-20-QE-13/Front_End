import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoMdChatboxes } from "react-icons/io";
import { editStatus, getJsById, getListJs } from "../../utils/apis/applications/api";
import { ChangeType, ListApplication, changeStatusSchema } from "../../utils/apis/applications/types";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JsType } from "../../utils/apis/jobseekers/types";

const DaftarPelamar = () => {
  const { id } = useParams();
  const [list, setList] = useState<ListApplication[]>([]);
  const [jobseeker, setJobseeker] = useState<Partial<JsType>>({});
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [idLamaran, setIdLamaran] = useState<number>(0);
  // const [idJobseeker, setIdJobseeker] = useState<number>(0);
  const { register, handleSubmit, setValue } = useForm<ChangeType>({
    resolver: zodResolver(changeStatusSchema),
    defaultValues: {
      id: 0,
      stat_app: "",
    },
  });

  // console.log(list);
  // console.log(idJobseeker);
  // console.log(jobseeker);

  useEffect(() => {
    setValue("id", idLamaran as number);
    fetchListJs(id);
    // fetchJobseeker(idJobseeker);
  }, [list]);

  const fetchListJs = async (id: number | any) => {
    try {
      const result = await getListJs(id);
      setList(result.data);
    } catch (error: any) {
      (error as Error).message;
    }
  };

  const fetchJobseeker = async (id: number | any) => {
    try {
      const result = await getJsById(id);
      setJobseeker(result.data);
    } catch (error: any) {
      (error as Error).message;
    }
  };

  const changeStatus = async (body: ChangeType) => {
    console.log(body);
    try {
      const result = await editStatus(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    } catch (error: any) {
      (error as Error).message;
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  return (
    <>
      <Layout>
        <div className="mx-20 my-10">
          <h1 className="text-2xl font-bold mb-5">Daftar Pelamar</h1>
          <div className="w-full mb-5">
            {list &&
              list.map((item, index) => (
                <div className="flex justify-between items-center p-5 border rounded-md" key={index}>
                  <div className="flex gap-5 items-center">
                    {/* <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                      </div>
                    </div> */}
                    {/* <h1 className="text-2xl font-bold">{item.applicant_name}</h1> */}
                    <label className="btn btn-sm" htmlFor="my_modal_7" onClick={() => fetchJobseeker(item.jobseeker_id)}>
                      Tampilkan Data Pelamar
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl">{item.position}</h1>
                    <h1>{item.company_name}</h1>
                  </div>
                  <div className="flex gap-2">
                    <h1 className="font-bold text-xl">{item.stat_app}</h1>
                    <label className="btn btn-sm" htmlFor="my_modal_8" onClick={() => setIdLamaran(item.id)}>
                      Edit Status
                    </label>
                  </div>
                  <button>
                    <IoMdChatboxes className="text-3xl" />
                  </button>
                </div>
              ))}
          </div>
        </div>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box max-w-[80%]">
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-36 rounded-full">
                  <img src={jobseeker.banners} />
                </div>
              </div>
            </div>
            <div className="flex gap-8 mb-10 justify-center">
              <div className="mt-10">
                <h1 className="text-3xl font-bold text-center">{jobseeker.full_name}</h1>
                <div className="flex gap-3 justify-center">
                  <p className="font-bold">{jobseeker.email}</p>
                  <p className="font-bold">|</p>
                  <p className="font-bold">{jobseeker.username}</p>
                </div>
                <div className="flex gap-20">
                  <div className="flex gap-10 my-10">
                    <div>
                      <p>Alamat</p>
                      <p>Kontak</p>
                      <p>Jenis Kelamin</p>
                      <p>Tanggal Lahir</p>
                    </div>
                    <div>
                      <p>{jobseeker.address}</p>
                      <p>{jobseeker.phone}</p>
                      <p>{jobseeker.gender}</p>
                      <p>{jobseeker.birth_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center mb-5">
              <h1 className="text-2xl font-bold">Riwayat Karir</h1>
            </div>
            {jobseeker.Careers &&
              jobseeker.Careers.map((value: any, index: any) => (
                <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                  <h1>{value.position}</h1>
                  <h1>{value.company_name}</h1>
                  <h1>Mulai: {value.date_start}</h1>
                  <h1>Berakhir: {value.date_end}</h1>
                </div>
              ))}
            <div className="flex gap-5 items-center mb-5">
              <h1 className="text-2xl font-bold">Pendidikan</h1>
            </div>
            {jobseeker.Educations &&
              jobseeker.Educations.map((value: any, index: any) => (
                <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                  <h1>{value.ed_level}</h1>
                  <h1>{value.major}</h1>
                  <h1>Lulus: {value.grad_date}</h1>
                  <h1></h1>
                </div>
              ))}
            <div className="flex gap-5 items-center mb-5">
              <h1 className="text-2xl font-bold">Lisensi & Sertifikasi</h1>
            </div>
            {jobseeker.Licenses &&
              jobseeker.Licenses.map((value: any, index: any) => (
                <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                  <h1>{value.license_name}</h1>
                  <h1>Publikasi: {value.pub_date}</h1>
                  <h1>Kadaluarsa: {value.exp_date}</h1>
                  <h1 className="text-primary hover:text-secondary active:text-orange-500">
                    <a href={`${value.license}`} target="_blank">
                      Berkas Lisensi
                    </a>
                  </h1>
                </div>
              ))}
            <div className="flex gap-5 items-center mb-5">
              <h1 className="text-2xl font-bold">Keahlian</h1>
            </div>
            {jobseeker.Skills &&
              jobseeker.Skills.map((value: any, index: any) => (
                <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                  <h1>{value.skill}</h1>
                  <h1>{value.description}</h1>
                  <h1></h1>
                  <h1></h1>
                </div>
              ))}
            <div className="flex gap-5 items-center mb-5">
              <h1 className="text-2xl font-bold">CV</h1>
            </div>
            {jobseeker.Cvs != undefined ? (
              <div className="flex justify-around p-2 w-full border rounded-sm my-5">
                <h1 className="text-primary hover:text-secondary active:text-orange-500">
                  <a href={jobseeker.Cvs.cv_file} target="_blank">
                    File CV
                  </a>
                </h1>
                <h1></h1>
                <h1></h1>
                <h1></h1>
              </div>
            ) : (
              <div>cv is empty</div>
            )}
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7" onClick={() => setJobseeker({})}>
            Close
          </label>
        </div>

        <input type="checkbox" id="my_modal_8" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Status</h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(changeStatus)}>
              <select id="stat_app" {...register("stat_app")} className="p-2 w-full my-3 border rounded-md outline-none">
                <option value=""></option>
                <option value="Inreview">Inreview</option>
                <option value="Interview">Interview</option>
                <option value="Diterima">Diterima</option>
                <option value="Ditolak">Ditolak</option>
              </select>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>edit status berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! edit status gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Edit" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" onClick={() => setIdLamaran(0)} htmlFor="my_modal_8">
            Close
          </label>
        </div>
      </Layout>
    </>
  );
};

export default DaftarPelamar;
