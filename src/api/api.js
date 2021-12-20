import axios from "axios";

const httpClient = axios.create({
  baseURL: `https://yalantis-react-school-api.yalantis.com/api/v1/`,
});
export default httpClient;
