import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { CareersType, JsType } from "./types";

export const getJs = async () => {
  try {
    const response = await axiosWithConfig.get("jobseekers");
    return response.data as ResponsePayload<JsType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUser = async (body: JsType) => {
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

export const deleteCareer = async (id: number) => {
  try {
    const response = await axiosWithConfig.delete(`career/${id}`);
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.response);
  }
};
