import axios from "axios";

const instance = axios.create({
  baseURL: "https://express-wedding-api.herokuapp.com/",
});

export default instance;
