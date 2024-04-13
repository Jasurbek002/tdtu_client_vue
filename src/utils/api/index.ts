import axios from 'axios';
const test_api = 'http://localhost:5000/v1';
const base_api = 'https://science.tdtu.uz/v1';
const api = axios.create({
	baseURL: base_api,
});

export { api };
