import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});
export default httpClient;
