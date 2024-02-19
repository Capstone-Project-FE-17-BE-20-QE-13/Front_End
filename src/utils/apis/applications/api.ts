import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { JsType } from "../jobseekers/types";
import { AddApplication, ChangeType, HistoryApplication, ListApplication } from "./types";

export const addToApplication = async (id: number) => {
  try {
    const response = await axiosWithConfig.post(`application?vacancy_id=${id}`);
    return response.data as AddApplication;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getHistoryApplication = async () => {
  try {
    const response = await axiosWithConfig.get("applications-jobseeker");
    return response.data as ResponsePayload<HistoryApplication[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getListJs = async (id: number | any) => {
  try {
    const response = await axiosWithConfig.get(`applications-company?vacancy_id=${id}`);
    return response.data as ResponsePayload<ListApplication[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const editStatus = async (body: ChangeType) => {
  const id = body.id;
  const data = { stat_app: body.stat_app };
  try {
    const response = await axiosWithConfig.put(`application/${id}`, data);
    return response.data as AddApplication;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getJsById = async (id: number) => {
  try {
    const response = await axiosWithConfig.get(`company-getjobseeker?jobseeker_id=${id}`);
    return response.data as ResponsePayload<JsType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
