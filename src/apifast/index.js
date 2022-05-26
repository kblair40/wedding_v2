import axios from "axios";

// https://www.youtube.com/watch?v=SgSnz7kW-Ko
const instance = axios.create({
  baseURL: "https://54.242.49.140/",
});

export default instance;
