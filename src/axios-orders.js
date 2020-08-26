import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-b9730.firebaseio.com/",
});

export default instance;
