import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { AddApplication, HistoryApplication, ListApplication } from "./types";

export const addToApplication = async (id : number) => {
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

  export const getListJs = async () => {
    try {
      const response = await axiosWithConfig.get("applications-company");
      return response.data as ResponsePayload<ListApplication[]>;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  