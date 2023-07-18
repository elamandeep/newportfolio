export interface projectInterface {
	slug: string;
	title: string;
	description: Object;
	imageGallery: Array<Object>;
	liveLink: string;
	githubLink: string;
	_id: string;
	icon: string,
	tags: string[];
	role: string
}

export type cardInterface = Pick<projectInterface, 'icon' | '_id' | 'title' | 'slug'>;

export type pageInterface = Omit<projectInterface, 'icon'>