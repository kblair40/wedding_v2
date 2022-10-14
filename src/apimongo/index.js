import axios from "axios";

const instance = axios.create({
  baseURL: "https://express-wedding-api.herokuapp.com/",
  // baseURL: "http://localhost:3001/",
});

export default instance;
