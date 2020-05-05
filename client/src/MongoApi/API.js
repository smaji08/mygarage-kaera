import axios from "axios";
const BASEURL = "https:??www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy?";
// "https://www.omdbapi.com/?t=what+about+bob&apikey=trilogy"


export default {
    getMovie: function(query) {
      return axios.get("/api/title", { params: { q: query } });
    },
    postMovie: function(query) {
        return axios.post("/api/ ", {params: {q: query } });
    }
  };