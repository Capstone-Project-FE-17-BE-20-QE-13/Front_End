import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { CareersType, EducationType, JobseekerType, JsType, SkillType } from "./types";

export const getJs = async () => {
  try {
    const response = await axiosWithConfig.get("jobseekers");
    return response.data as ResponsePayload<JsType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUser = async (body: JobseekerType) => {
  try {
    const response = await axiosWithConfig.put("jobseekers", body);
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
