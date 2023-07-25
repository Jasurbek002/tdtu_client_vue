import axios from "axios";

const api = axios.create({
  baseURL: "http://34.204.6.47:5000/v1",
});

export { api };
