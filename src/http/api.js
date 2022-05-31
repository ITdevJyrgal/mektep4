import axios from "axios";

export const api = axios.create({
    baseURL: "https://school-prod.herokuapp.com/"
})