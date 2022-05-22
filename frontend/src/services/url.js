import axios from "axios";

const baseUrl = "https://desolate-shelf-73679.herokuapp.com/url";

const shortify = async (url) => {
  const response = await axios.post(baseUrl, url);

  return response.data.alias;
};

export default { shortify };
