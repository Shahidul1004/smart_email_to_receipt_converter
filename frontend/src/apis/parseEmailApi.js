import axios from "axios";

export const parseEmailApi = async (body) => {
  const url = "https://httpbin.org/post"; //dummy url

  const response = await axios.post(url, body);
  return response;
};
