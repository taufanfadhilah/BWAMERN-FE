import axios from "axios";
import errorResponseHandler from "./errorResponseHandler";

const instace = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instace.interceptors.response.use((response) => response, errorResponseHandler);

export default instace;
