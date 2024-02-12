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

  export const UpdateTheatre = async (payload) => {
    try {
      const response = await axiosinstance.post(
        "http://localhost:7000/theatre/update-theatre",
        payload
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };

  
export const GetAllTheatres = async () => {
  try {
    const response = await axiosinstance.get(
      "http://localhost:7000/theatre/get-all-theatre",
      
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

    
export const GetAllShowsByTheatre = async (payload) => {
  try {
    const response = await axiosinstance.post(
      "http://localhost:7000/theatre/get-all-shows-by-theatre",payload
      
    );
    return response.data;
  } catch (err) {
    return err;
  }
};




  export const AddShow= async (payload) => {
    try {
      const response = await axiosinstance.post(
        "http://localhost:7000/theatre/add-shows",
        payload
      );
      return response.data;
    } catch (err) {
      return err;
    }
  };


  export const GetAllTheatresByMovie =  async(payload) =>{
    try{

      const response = await axiosinstance.post(
        "http://localhost:7000/theatre/get-all-theatre-by-movie",
        payload
      );
      return response.data;

    }catch(err){
      return err;
 
    }

  }