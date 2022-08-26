import axios from 'axios';

const BASE_URL = 'https://stocktaking-api.onrender.com';

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-type': 'application/json' },
	withCredentials: true,
});

export default axios.create({ baseURL: BASE_URL });
