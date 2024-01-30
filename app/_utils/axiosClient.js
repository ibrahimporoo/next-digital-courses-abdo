const axios = require("axios");

const api_token = process.env.NEXT_PUBLIC_REST_API_TOKEN;
// const api_url = 'https://first-next-js-app-for-digital-courses.onrender.com/api';
const api_url = 'https://digital-courses-abdo.onrender.com/api';

const axiosClient = axios.create({
	baseURL: api_url,
	headers: {
		Authorization: `bearer ${api_token}`
	}
});

export default axiosClient;