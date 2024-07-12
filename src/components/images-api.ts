import axios, {AxiosResponse} from "axios";
import { FetchImagesResponse } from "./App.types";
axios.defaults.baseURL = "https://api.unsplash.com/";
const key = "5tIHeNlvOTskSLbZ_aIavcwIE4hWbuOA7EVwGAmxgoY";



export const fetchImagesWithTopic = async (
  query: string,
  page: number,
  per_page: number = 12
): Promise<FetchImagesResponse> => {
  try {
    const response: AxiosResponse<FetchImagesResponse> = await axios.get("/search/photos", {
      params: { client_id: key, query, page, per_page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
