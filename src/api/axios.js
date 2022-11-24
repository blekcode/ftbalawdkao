import axios from "axios";

const api = axios.create({
  baseURL: "https://api.football-data.org/v2",
});

api.interceptors.request.use((config) => {
  config.headers["X-Auth-Token"] = "8adb2b0da375429ea763dc79b6d7148b";

  return config;
});

export default api;
