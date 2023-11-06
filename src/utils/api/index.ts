import axios from "axios";

const api = axios.create({
  baseURL: "https://science.tdtu.uz/v1",
});

export { api };
