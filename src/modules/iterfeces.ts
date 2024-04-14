export interface Brm {
	brm_id: number;
	brm_image: string;
	title_uz: string;
	title_en: string;
	text_uz: string;
	text_en: string;
	category: string;
}

export interface IPost {
	id: number;
	createdAt: string;
	updatedAt: string;
	name: Name;
	description: Description;
	sub_titles: SubTitle[];
	image: Image;
	category: Category;
}

export interface Name {
	en: string;
	uz: string;
}

export interface Description {
	en: string;
	uz: string;
}

export interface SubTitle {
	size: string;
	color: string;
	text_en: string;
	text_uz: string;
	title_en: string;
	title_uz: string;
}

export interface Image {
	id: number;
	createdAt: string;
	updatedAt: string;
	images: string[];
}

export interface Category {
	id: number;
	createdAt: string;
	updatedAt: string;
	name: string;
}

export interface GetAllPostsResponce {
	data: IPost[];
	status: number;
}
