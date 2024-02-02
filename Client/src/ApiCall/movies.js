import { axiosinstance } from "./index";

export const AddMovie = async (payload) => {
  try {
    const response = await axiosinstance.post(
      "http://localhost:7000/movie/add-movie",
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
