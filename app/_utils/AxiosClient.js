import axios from "axios"

const BaseUrl= "https://fakestoreapi.com/";
export const AxiosClient = axios.create({baseURL:BaseUrl});