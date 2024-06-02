import axios from "axios";

export const getAllPostFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);
