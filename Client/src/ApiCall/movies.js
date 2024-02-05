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

export const UpdateMovie = async (payload) => {
  try {
    const response = await axiosinstance.post(
      "http://localhost:7000/movie/edit-movie",
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};


export const GetAllMovies = async () => {
  try {
    const response = await axiosinstance.get(
      "http://localhost:7000/movie/get-all-movies",
      
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const DeleteMovie = async (id) => {
  try {
    const response = await axiosinstance.post(
      "http://localhost:7000/movie/delete-movie",id
      
    );
    return response.data;
  } catch (err) {
    return err;
  }
};


