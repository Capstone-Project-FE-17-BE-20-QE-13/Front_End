import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { AllVacancies } from "./types";

export const getAllVacancies = async () => {
    try {
      const response = await axiosWithConfig.get("all-vacancies");
      return response.data as ResponsePayload<AllVacancies[]>;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };