import { api, newApi } from '@/utils/api';

class DataService {
	constructor() {}
	async getData(url: string) {
		try {
			const data: any = api.get(url);
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async getOneData(path: string, id: number | string) {
		try {
			const data: any = api.get(`${path}/${id}`);
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async getPostsByCategory(categoryId: number) {
		try {
			const responce = await newApi.get(`/posts/by-category/${categoryId}`);
			return responce.data;
		} catch (error) {
			console.log(error);
		}
	}

	async getOnePost(postId: number) {
		try {
			const responce = await newApi.get(`/posts/${postId}`);
			return responce.data;
		} catch (error) {
			console.log(error);
		}
	}
}

export default new DataService();
