import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { FaPlus } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { CVType, CareersType, EducationType, JobseekerType, JsType, LicenseType, SkillType, careersSchema, cvSchema, educationSchema, jobseekerSchema, licenseSchema, skillSchema } from "../../utils/apis/jobseekers/types";
import { useForm } from "react-hook-form";
import { getCV, getCareers, getEducation, getLicense, getSkill, postCV, postCareer, postEducation, postLicense, postSkill, updateUser } from "../../utils/apis/jobseekers/api";
import { IoMdDocument } from "react-icons/io";
import Swal from "sweetalert2";
import axiosWithConfig from "../../utils/apis/axiosWithConfig";
import { RiImageAddFill } from "react-icons/ri";
import { useAuthCookie } from "../../utils/contexts/newAuth";

const ProfileUser = () => {
  const { js } = useAuthCookie();
  // console.log(js);
  const [isSuccess, setIsSuccess] = useState<string>("");
  const [careers, setCareers] = useState<CareersType[]>();
  const [education, setEducation] = useState<EducationType[]>();
  const [skill, setSkill] = useState<SkillType[]>();
  const [license, setLicense] = useState<LicenseType[]>();
  const [cv, setCV] = useState<Partial<CVType>>({});
  // const [cvError, setCVError] = useState<any>();

  // console.log(cv);

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<JsType>({
    resolver: zodResolver(jobseekerSchema),
    defaultValues: {
      banners: "",
      full_name: "",
      username: "",
      password: "",
      email: "",
      address: "",
      phone: "",
      birth_date: "",
      gender: "",
      resume: "",
    },
  });

  const {
    register: careerRegister,
    handleSubmit: careerSubmit,
    setValue: careerSetValue,
    reset,
  } = useForm<CareersType>({
    resolver: zodResolver(careersSchema),
    defaultValues: {
      company_name: "",
      date_start: "",
      date_end: "",
      id: 0,
      jobseeker_id: 0,
      position: "",
    },
  });

  const {
    register: educationRegister,
    handleSubmit: educationSubmit,
    setValue: educationSetValue,
  } = useForm<EducationType>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      ed_level: "",
      major: "",
      grad_date: "",
      id: 0,
      jobseeker_id: 0,
    },
  });

  const {
    register: skillRegister,
    handleSubmit: skillSubmit,
    setValue: skillSetValue,
  } = useForm<SkillType>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      skill: "",
      description: "",
      id: 0,
      jobseeker_id: 0,
    },
  });

  const {
    register: licenseRegister,
    handleSubmit: licenseSubmit,
    setValue: licenseSetValue,
  } = useForm<LicenseType>({
    resolver: zodResolver(licenseSchema),
    defaultValues: {
      id: 0,
      jobseeker_id: 0,
      license_name: "",
      pub_date: "",
      exp_date: "",
      license: "",
    },
  });

  const {
    register: cvRegister,
    handleSubmit: cvSubmit,
    setValue: cvSetValue,
  } = useForm<CVType>({
    resolver: zodResolver(cvSchema),
    defaultValues: {
      id: 0,
      jobseeker_id: 0,
      cv_file: "",
    },
  });

  useEffect(() => {
    setValue("full_name", js?.full_name as string);
    setValue("username", js?.username as string);
    setValue("email", js?.email as string);
    setValue("address", js?.address as string);
    setValue("phone", js?.phone as string);
    setValue("birth_date", js?.birth_date as string);
    setValue("gender", js?.gender as string);
    setValue("resume", js?.resume as string);
    careerSetValue("jobseeker_id", js?.id as number);
    educationSetValue("jobseeker_id", js?.id as number);
    skillSetValue("jobseeker_id", js?.id as number);
    licenseSetValue("jobseeker_id", js?.id as number);
    cvSetValue("jobseeker_id", js?.id as number);
  }, [js]);

  const handleUpdateProfile = async (body: JobseekerType) => {
    const data = body;
    if (data.password == "") {
      delete data.password;
    }

    if (data.email == js.email) {
      delete data.email;
    }

    if (data.username == js.username) {
      delete data.username;
    }

    if (data.full_name == js.full_name) {
      delete data.full_name;
    }

    if (data.banners == js.banners || data.banners == "") {
      delete data.banners;
    }

    if (data.address == js.address) {
      delete data.address;
    }

    if (data.phone == js.phone) {
      delete data.phone;
    }

    if (data.birth_date == js.birth_date) {
      delete data.birth_date;
    }

    if (data.gender == js.gender) {
      delete data.gender;
    }

    if (data.resume == js.resume) {
      delete data.resume;
    }

    console.log("data = ", data);
    try {
      const result = await updateUser(data);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
        // window.location.reload();
      }, 3000);
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleCareerAdd = async (body: CareersType) => {
    console.log(body);
    try {
      const result = await postCareer(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      reset();
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleDeleteCareer = (id: number) => {
    console.log(id);
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
          .delete(`career/${id}`)
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

  const handleEducationAdd = async (body: EducationType) => {
    console.log(body);
    try {
      const result = await postEducation(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      reset();
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleDeleteEducation = (id: number) => {
    console.log(id);
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
          .delete(`education/${id}`)
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

  const handleSkillAdd = async (body: SkillType) => {
    console.log(body);
    try {
      const result = await postSkill(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      reset();
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleDeleteSkill = (id: number) => {
    console.log(id);
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
          .delete(`skill/${id}`)
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

  const handleLicenseAdd = async (body: LicenseType) => {
    console.log(body);
    try {
      const result = await postLicense(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      reset();
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleDeleteLicense = (id: number) => {
    console.log(id);
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
          .delete(`license/${id}`)
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

  const handleCVAdd = async (body: CVType) => {
    console.log(body);
    try {
      const result = await postCV(body);
      console.log(result);
      setIsSuccess("yes");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
      reset();
    } catch (error: any) {
      console.log(error as Error);
      setIsSuccess("no");
      setTimeout(() => {
        setIsSuccess("");
      }, 3000);
    }
  };

  const handleDeleteCV = () => {
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
          .delete(`cv`)
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

  useEffect(() => {
    getDataCareers();
    getDataEducation();
    getDataSkill();
    getDataLicense();
    getDataCV();
  }, [careers, education, skill, license, cv]);

  const getDataCareers = async () => {
    try {
      const result = await getCareers();
      setCareers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataEducation = async () => {
    try {
      const result = await getEducation();
      setEducation(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataSkill = async () => {
    try {
      const result = await getSkill();
      setSkill(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataLicense = async () => {
    try {
      const result = await getLicense();
      setLicense(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataCV = async () => {
    try {
      const result = await getCV();
      setCV(result.data);
      // console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="mx-20 my-16">
          <div className="flex gap-8 mb-10">
            <div className="avatar">
              <div className="w-56 rounded-full">
                <img src={js.banners} />
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-3xl font-bold">{js.full_name}</h1>
              <div className="flex gap-3">
                <p className="font-bold">{js.email}</p>
                <p className="font-bold">|</p>
                <p className="font-bold">{js.username}</p>
              </div>
              <div className="flex gap-20">
                <div className="flex gap-10 my-10">
                  <div>
                    <p>Alamat</p>
                    <p>Kontak</p>
                  </div>
                  <div>
                    <p>{js.address}</p>
                    <p>{js.phone}</p>
                  </div>
                </div>
                <div className="flex gap-10 my-10">
                  <div>
                    <p>Jenis Kelamin</p>
                    <p>Tanggal Lahir</p>
                  </div>
                  <div>
                    <p>{js.gender}</p>
                    <p>{js.birth_date}</p>
                  </div>
                  <label htmlFor="my_modal_7" className="btn w-[80px] h-10 p-1 rounded-md bg-secondary text-white">
                    Edit
                  </label>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-bold mb-3">Ringkasan Pribadi</h1>
          <p className="mb-5 text-justify">{js.resume}</p>
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Riwayat Karir</h1>
            <label htmlFor="my_modal_8" className="btn bg-transparent">
              <FaPlus className="text-2xl text-success" />
            </label>
          </div>
          {careers &&
            careers.map((value: any, index: any) => (
              <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                <h1>{value.position}</h1>
                <h1>{value.company_name}</h1>
                <h1>Mulai: {value.date_start}</h1>
                <h1>Berakhir: {value.date_end}</h1>
                <button onClick={() => handleDeleteCareer(value.id)}>
                  <IoTrash className="text-2xl text-red-500" />
                </button>
              </div>
            ))}
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Pendidikan</h1>
            <label htmlFor="my_modal_9" className="btn bg-transparent">
              <FaPlus className="text-2xl text-success" />
            </label>
          </div>
          {education &&
            education.map((value: any, index: any) => (
              <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                <h1>{value.ed_level}</h1>
                <h1>{value.major}</h1>
                <h1>Lulus: {value.grad_date}</h1>
                <h1></h1>
                <button onClick={() => handleDeleteEducation(value.id)}>
                  <IoTrash className="text-2xl text-red-500" />
                </button>
              </div>
            ))}
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Lisensi & Sertifikasi</h1>
            <label htmlFor="my_modal_10" className="btn bg-transparent">
              <FaPlus className="text-2xl text-success" />
            </label>
          </div>
          {license &&
            license.map((value: any, index: any) => (
              <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                <h1>{value.license_name}</h1>
                <h1>Publikasi: {value.pub_date}</h1>
                <h1>Kadaluarsa: {value.exp_date}</h1>
                <h1 className="text-primary hover:text-secondary active:text-orange-500">
                  <a href={`${value.license}`} target="_blank">
                    Berkas Lisensi
                  </a>
                </h1>
                <button onClick={() => handleDeleteLicense(value.id)}>
                  <IoTrash className="text-2xl text-red-500" />
                </button>
              </div>
            ))}
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">Keahlian</h1>
            <label htmlFor="my_modal_11" className="btn bg-transparent">
              <FaPlus className="text-2xl text-success" />
            </label>
          </div>
          {skill &&
            skill.map((value: any, index: any) => (
              <div key={index} className="flex justify-around p-2 w-full border rounded-sm my-5">
                <h1>{value.skill}</h1>
                <h1>{value.description}</h1>
                <h1></h1>
                <h1></h1>
                <button onClick={() => handleDeleteSkill(value.id)}>
                  <IoTrash className="text-2xl text-red-500" />
                </button>
              </div>
            ))}
          <div className="flex gap-5 items-center mb-5">
            <h1 className="text-2xl font-bold">CV</h1>
            <label htmlFor="my_modal_12" className="btn bg-transparent">
              <FaPlus className="text-2xl text-success" />
            </label>
          </div>
          {cv.cv_file != undefined ? (
            <div className="flex justify-around p-2 w-full border rounded-sm my-5">
              <h1 className="text-primary hover:text-secondary active:text-orange-500">
                <a href={cv.cv_file} target="_blank">
                  File CV
                </a>
              </h1>
              <h1></h1>
              <h1></h1>
              <h1></h1>
              <button onClick={() => handleDeleteCV()}>
                <IoTrash className="text-2xl text-red-500" />
              </button>
            </div>
          ) : (
            <div>cv is empty</div>
          )}
        </div>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Edit Data Company</h3>
            <form method="dialog" className="flex flex-col gap-5" onSubmit={handleSubmit(handleUpdateProfile)}>
              <label htmlFor="banners" className="w-full h-[100px] flex flex-col justify-center items-center shadow-md rounded-md cursor-pointer">
                Add Photo Profile
                <RiImageAddFill className="text-xl" />
              </label>
              <input type="file" id="banners" {...register("banners")} className="hidden" />
              <input type="text" {...register("full_name")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Lengkap" />
              <input type="text" {...register("username")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Username" />
              <input type="email" {...register("email")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Email" />
              <input type="password" {...register("password")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Password" />
              <input type="text" {...register("address")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Alamat" />
              <input type="text" {...register("phone")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Kontak" />
              <label htmlFor="ttl">
                Tanggal Lahir
                <input type="date" {...register("birth_date")} id="ttl" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <div className="flex gap-4 mb-3">
                Gender
                <label htmlFor="male">
                  <input className="me-2" type="radio" value="Laki-laki" {...register("gender")} id="male" name="gender" />
                  Laki-laki
                </label>
                <label htmlFor="female">
                  <input className="me-2" type="radio" value="Perempuan" {...register("gender")} id="female" name="gender" />
                  Perempuan
                </label>
              </div>
              <textarea id="resume" {...register("resume")} placeholder="Resume" className="p-2 rounded-md drop-shadow-md outline-none" cols={30} rows={5}></textarea>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>edit profil berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! edit profil gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Edit" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>

        <input type="checkbox" id="my_modal_8" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Riwayat Karir</h3>
            <form method="dialog" className="flex flex-col gap-5" onSubmit={careerSubmit(handleCareerAdd)}>
              <input type="text" {...careerRegister("position")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Posisi" />
              <input type="text" {...careerRegister("company_name")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Perusahaan" />
              <label htmlFor="mulai">
                Mulai
                <input type="date" {...careerRegister("date_end")} id="mulai" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <label htmlFor="berakhir">
                Berakhir
                <input type="date" {...careerRegister("date_start")} id="berakhir" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>tambah karir berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! tambah karir gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Tambah" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_8">
            Close
          </label>
        </div>

        <input type="checkbox" id="my_modal_9" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Pendidikan</h3>
            <form method="dialog" className="flex flex-col gap-5" onSubmit={educationSubmit(handleEducationAdd)}>
              <input type="text" {...educationRegister("ed_level")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Tingkat Pendidikan" />
              <input type="text" {...educationRegister("major")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Jurusan" />
              <label htmlFor="lulus">
                Tahun Lulus
                <input type="date" {...educationRegister("grad_date")} id="lulus" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>tambah karir berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! tambah karir gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Tambah" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_9">
            Close
          </label>
        </div>

        <input type="checkbox" id="my_modal_10" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Lisensi & Sertifikasi</h3>
            <form method="dialog" className="flex flex-col gap-5" onSubmit={licenseSubmit(handleLicenseAdd)}>
              <input type="text" {...licenseRegister("license_name")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Lisensi" />
              <label htmlFor="terbit">
                Tanggal Terbit
                <input type="date" {...licenseRegister("pub_date")} id="terbit" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <label htmlFor="kadaluarsa">
                Tanggal Kadaluarsa
                <input type="date" {...licenseRegister("exp_date")} id="kadaluarsa" className="p-2 ms-5 rounded-md drop-shadow-md outline-none" />
              </label>
              <label htmlFor="license" className="w-full h-[100px] flex flex-col justify-center items-center shadow-md rounded-md cursor-pointer">
                Add License
                <IoMdDocument className="text-xl" />
              </label>
              <input type="file" id="license" {...licenseRegister("license")} className="hidden" />
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>tambah lisensi berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! tambah lisensi gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Tambah" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_10">
            Close
          </label>
        </div>

        <input type="checkbox" id="my_modal_11" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Keahlian</h3>
            <form method="dialog" className="flex flex-col gap-5" onSubmit={skillSubmit(handleSkillAdd)}>
              <input type="text" {...skillRegister("skill")} className="p-2 rounded-md drop-shadow-md outline-none" placeholder="Nama Keahlian" />
              <textarea id="deskripsi" {...skillRegister("description")} placeholder="Deskripsi" className="p-2 rounded-md drop-shadow-md outline-none" cols={30} rows={5}></textarea>
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>tambah keahlian berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! tambah keahlian gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Tambah" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_11">
            Close
          </label>
        </div>

        <input type="checkbox" id="my_modal_12" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Curiculum Vitae</h3>
            <form className="flex flex-col gap-5" onSubmit={cvSubmit(handleCVAdd)}>
              <label htmlFor="cv" className="w-full h-[100px] flex flex-col justify-center items-center shadow-md rounded-md cursor-pointer">
                Add CV
                <IoMdDocument className="text-xl" />
              </label>
              <input type="file" {...cvRegister("cv_file")} id="cv" className="hidden" />
              {(() => {
                if (isSuccess == "yes") {
                  return (
                    <div role="alert" className="alert alert-success my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>tambah cv berhasil.</span>
                    </div>
                  );
                } else if (isSuccess == "no") {
                  return (
                    <div role="alert" className="alert alert-error my-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Error! tambah cv gagal.</span>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })()}
              <input type="submit" value="Tambah" className="w-28 bg-secondary cursor-pointer hover:bg-orange-500 active:bg-orange-600 p-3 rounded-md text-white self-end" />
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_12">
            Close
          </label>
        </div>
      </Layout>
    </>
  );
};

export default ProfileUser;
