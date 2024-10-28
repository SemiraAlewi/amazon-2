import axios from "axios";

const axiosInstance = axios.create({
//   // localinstance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-2024-d9b68/us-central1/api",
//   // deployed version of amazone server on render.com
   baseURL: "https://amazon-api-deploy-u6fg.onrender.com",
});

export { axiosInstance };