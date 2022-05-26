import axios from "axios";

// https://www.youtube.com/watch?v=SgSnz7kW-Ko
const instance = axios.create({
  baseURL: "http://54.242.49.140/",
  // baseURL: "http://localhost:8000/",
  // headers: {

  // }
});

export default instance;
