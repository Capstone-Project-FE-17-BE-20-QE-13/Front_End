import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { AllVacancies, Vacancies } from "./types";

export const getAllVacancies = async () => {
    try {
      const response = await axiosWithConfig.get("all-vacancies");
      return response.data as ResponsePayload<AllVacancies[]>;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  export const getVacancies = async (vacancyId : string) => {
    try {
      const response = await axiosWithConfig.get(`vacancy/${vacancyId}`);
      return response.data as ResponsePayload<Vacancies>;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };