import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mzE7iqjYmcT_9AUzxCfIZdwxQyNjQwooM2ULK-8iFck",
  },
});
