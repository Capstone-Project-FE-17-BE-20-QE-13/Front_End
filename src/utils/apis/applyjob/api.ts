import axiosWithConfig from "../axiosWithConfig";
import { AddAplication } from "./types";

export const addToApplication = async (id : number) => {
    try {
      const response = await axiosWithConfig.post(`application?vacancy_id=${id}`);
      return response.data as AddAplication;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };