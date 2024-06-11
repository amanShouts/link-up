import axios from 'axios';

export const getSingleUserDetail = (url: string) => axios.get(url).then((res) => res.data);
