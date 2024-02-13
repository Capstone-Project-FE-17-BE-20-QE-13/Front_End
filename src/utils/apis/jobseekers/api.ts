import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { JsType } from "./types";

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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};
