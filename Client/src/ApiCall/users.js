import { axiosinstance } from "./index";

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosinstance.post("http://localhost:7000/user/register", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};


export const loginUser =  async (payload) => {
  try {
    const response = await axiosinstance.post("http://localhost:7000/user/login", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};