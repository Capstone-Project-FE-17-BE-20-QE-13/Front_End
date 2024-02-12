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
