import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { AllVacancies, VacancyType } from "./types";

export const getAllVacancies = async () => {
  try {
    const response = await axiosWithConfig.get("all-vacancies");
    return response.data as ResponsePayload<AllVacancies[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getMyVacancies = async () => {
  try {
    const response = await axiosWithConfig.get("mycompany-vacancies");
    return response.data as ResponsePayload<VacancyType[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getDetailVacancy = async (id: number) => {
  try {
    const response = await axiosWithConfig.get(`vacancy/${id}`);
    return response.data as ResponsePayload<VacancyType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addVacancy = async (body: VacancyType) => {
  try {
    const response = await axiosWithConfig.post("vacancy", body);
    return response.data as ResponsePayload<VacancyType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const editVacancy = async (id: number | any, body: VacancyType) => {
  try {
    const response = await axiosWithConfig.put(`vacancy/${id}`, body);
    return response.data as ResponsePayload<VacancyType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
