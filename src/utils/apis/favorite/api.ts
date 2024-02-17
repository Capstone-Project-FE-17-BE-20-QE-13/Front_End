import { ResponsePayload } from "../../types/api";
import axiosWithConfig from "../axiosWithConfig";
import { FavoriteType } from "./types";

export const getFavorite = async () => {
  try {
    const response = await axiosWithConfig.get("favorit");
    return response.data as ResponsePayload<FavoriteType[]>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addToFavorite = async (id: number) => {
  try {
    const response = await axiosWithConfig.post(`favorit?vacancy_id=${id}`);
    return response.data as ResponsePayload<FavoriteType>;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
