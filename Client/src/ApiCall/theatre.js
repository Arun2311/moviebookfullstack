import { axiosinstance } from "./index";


export const AddTheatre = async (payload) => {
    try {
      const response = await axiosinstance.post(
        "http://localhost:7000/theatre/add-theatre",
        payload
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };


  export const GetAllTheatresByOwner = async (payload) => {
    console.log(payload,"SAdjksadhjs");
    try {
      const response = await axiosinstance.post(
        "http://localhost:7000/theatre/get-all-theatre-by-owner",
        payload
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };