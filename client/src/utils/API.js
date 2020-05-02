import axios from "axios";
// import MyForm from "../garage/VinForm";
export default {
  getCar: function (vinNum) {
    return axios.get(
      "https://marketcheck-prod.apigee.net/v2/decode/car/" +
        vinNum +
        // "/specs?api_key=G8wFnLaxeRWBiUvMcHfd3eo7C9KBZQLX"
        "/specs?api_key=" +
        process.env.REACT_APP_API_KEY
    );
  },

  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },

  test: function () {
    return axios.get("/api/user/Get");
  },

  getMovie: function (vinNum) {
    return axios.get(
      "https://marketcheck-prod.apigee.net/v2/decode/car/" +
        vinNum +
        // "/specs?api_key=G8wFnLaxeRWBiUvMcHfd3eo7C9KBZQLX"
        "/specs?api_key=" +
        process.env.REACT_APP_API_KEY
    );
  },

  createUser: function (userData) {
    console.log(userData);
    return axios.post("/api/user", userData);
  },

  createSchedule: function (scheduleData) {
    return axios.post("/api/schedule", scheduleData);
  },
};
