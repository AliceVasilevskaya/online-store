import axios from "axios";

const httpClient = axios.create({
  baseURL: `https://yalantis-react-school-api.yalantis.com/api/v1/`,
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkFsaXNhIFZhc3lsZXZza2EiLCJpYXQiOjE2NDIxNzc2NDQsImV4cCI6MTY0NzM2MTY0NH0.x7tyWfyFf4443pLWSyNvQ1RzcRXthwRfZ8onMU8Y5Zs",
  },
});
export default httpClient;
