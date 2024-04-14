import axios from 'axios';
const test_api = 'http://localhost:5000/v1';
const base_api = 'https://science.tdtu.uz/v1';
const base_new_api = 'https://science.tdtu.uz/apiv2/api';
const api = axios.create({
	baseURL: base_api,
});

const newApi = axios.create({
	baseURL: base_new_api,
});

export { api, newApi };
