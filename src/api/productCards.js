import axios from "@/api/axios.js";

const getProductCards = (apiUrl) => {
  return axios.get(apiUrl);
};

export default { getProductCards };
