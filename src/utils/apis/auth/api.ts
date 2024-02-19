import axiosWithConfig from "../axiosWithConfig";
import { LoginType, CompanyRegisterType, UserRegisterType } from "./types";

export const userRegister = async (body: UserRegisterType) => {
  try {
    const response = await axiosWithConfig.post("register/jobseekers", body);
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const companyRegister = async (body: CompanyRegisterType) => {
  try {
    const response = await axiosWithConfig.post("register/company", body);
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const candidateLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post("login/jobseekers", body);
    return response.data.data as { email: string; token: string; id: number; roles: string };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const companyLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post("login/company", body);
    return response.data.data as { email: string; token: string; id: number; roles: string };
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
