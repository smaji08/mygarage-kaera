import axios from "axios";

// import MyForm from "../garage/VinForm";
export default {
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },

  getUser: function(userData) {
    return axios.post("api/user/login", userData);
  },

  getCar: function(vinNum) {
    return axios.get(
      "https://marketcheck-prod.apigee.net/v2/decode/car/" +
        vinNum +
        // "/specs?api_key=G8wFnLaxeRWBiUvMcHfd3eo7C9KBZQLX"
        "/specs?api_key=" +
        process.env.REACT_APP_API_KEY
    );
  },

  // getMovie: function(vinNum) {
  //   return axios.get(
  //     "https://marketcheck-prod.apigee.net/v2/decode/car/" +
  //       vinNum +
  //       // "/specs?api_key=G8wFnLaxeRWBiUvMcHfd3eo7C9KBZQLX"
  //       "/specs?api_key=" +
  //       process.env.REACT_APP_API_KEY
  //   );
  // },

  saveVehicle: function(vehicleData) {
    return axios.post("/api/vehicle", vehicleData);
  },

  getUserVehicles: function(username) {
    return axios.get("/api/vehicle", username);
  },

  getVehicle: function(user) {
    return axios.get("/api/vehicle", {
      params: {
        username: user,
      },
    });
  },

  updateUser: function(user, userData) {
    return axios.put("/api/user/" + user, userData);
  },

  createSchedule: function(user, scheduleData) {
    return axios.put("/api/schedule/" + user, scheduleData);
  },

  getSchedule: function(user) {
    return axios.get("/api/schedule", {
      params: {
        username: user,
      },
    });
  },
};
