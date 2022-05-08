import axios from "axios";

const baseUrl = "http://localhost:3001/url";

const shortify = async (url) => {
  const response = await axios.post(baseUrl, url);

  return response.data.alias;
};

export default { shortify };
