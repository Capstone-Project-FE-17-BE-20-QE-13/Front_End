import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { CompanyAddType, CompanyType } from "./types";

export const getCompany = async () => {
  try {
    const response = await axiosWithConfig.get("company");
    return response.data as ResponsePayload<CompanyType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateCompany = async (body: CompanyAddType) => {
  const formData = new FormData();

  formData.append("full_name", body.full_name);
  formData.append("company_name", body.company_name);
  formData.append("company_size", body.company_size);
  formData.append("company_type", body.company_type);
  formData.append("website", body.website);
  formData.append("phone", body.phone);
  formData.append("address", body.address);
  formData.append("description", body.description);
  if (body.banners.length != 0) {
    formData.append("banners", body.banners[0]);
  }
  try {
    const response = await axiosWithConfig.put("company", formData);
    return response.data as { message: string };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
