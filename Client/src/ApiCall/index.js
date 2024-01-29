import axios from 'axios'



export const axiosinstance = axios.create({
    headers:{
        credential:"include",
        method:"post",
        "Content-Type":"application/json",
    }
})