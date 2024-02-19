import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { CVType, CareersType, EducationType, JobseekerType, JobseekerTypeApi, JsType, LicenseType, SkillType } from "./types";

export const getJs = async () => {
  try {
    const response = await axiosWithConfig.get("jobseekers");
    return response.data as ResponsePayload<JsType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUser = async (body: JobseekerType) => {
  const formData = new FormData();

  if (body.full_name != undefined) {
    formData.append("full_name", body.full_name);
  }

  if (body.banners != undefined) {
    formData.append("banners", body.banners[0]);
  }

  if (body.username != undefined) {
    formData.append("username", body.username);
  }
  if (body.email != undefined) {
    formData.append("email", body.email);
  }
  if (body.address != undefined) {
    formData.append("address", body.address);
  }
  if (body.phone != undefined) {
    formData.append("phone", body.phone);
  }
  if (body.birth_date != undefined) {
    formData.append("birth_date", body.birth_date);
  }
  if (body.gender != undefined) {
    formData.append("gender", body.gender);
  }
  if (body.password != undefined) {
    formData.append("password", body.password);
  }

  try {
    const response = await axiosWithConfig.put("jobseekers", formData);
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCareers = async () => {
  try {
    const response = await axiosWithConfig.get("/all-careers");
    return response.data as ResponsePayload<CareersType[]>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const postCareer = async (body: CareersType) => {
  try {
    const response = await axiosWithConfig.post("career", body);
    return response.data as ResponsePayload<CareersType>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const postEducation = async (body: EducationType) => {
  try {
    const response = await axiosWithConfig.post("education", body);
    return response.data as ResponsePayload<EducationType>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getEducation = async () => {
  try {
    const response = await axiosWithConfig.get("/all-educations");
    return response.data as ResponsePayload<EducationType[]>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const postSkill = async (body: SkillType) => {
  try {
    const response = await axiosWithConfig.post("skill", body);
    return response.data as ResponsePayload<SkillType>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getSkill = async () => {
  try {
    const response = await axiosWithConfig.get("/all-skills");
    return response.data as ResponsePayload<SkillType[]>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const postLicense = async (body: LicenseType) => {
  const formData = new FormData();

  formData.append("license_name", body.license_name);
  formData.append("pub_date", body.pub_date);
  formData.append("exp_date", body.exp_date);
  formData.append("license", body.license[0]);

  try {
    const response = await axiosWithConfig.post("license", formData);
    return response.data as ResponsePayload<LicenseType>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getLicense = async () => {
  try {
    const response = await axiosWithConfig.get("/all-licenses");
    return response.data as ResponsePayload<LicenseType[]>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const postCV = async (body: CVType) => {
  const formData = new FormData();

  formData.append("cv_file", body.cv_file[0]);

  try {
    const response = await axiosWithConfig.post("cv", formData);
    return response.data as ResponsePayload<CVType>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getCV = async () => {
  try {
    const response = await axiosWithConfig.get("/cv");
    return response.data as ResponsePayload<CVType>;
  } catch (error: any) {
    throw new Error(error.response);
  }
};
