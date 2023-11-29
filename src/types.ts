interface ImageGalleryInterface {
  [index: string]: any;
}

export interface projectInterface {
  slug: string;
  title: string;

  description: any;
  imageGallery: Array<ImageGalleryInterface> | null;
  liveLink: string;
  githubLink: string;
  _id: string;
  icon: string;
  tags: string[];
  role: string;
}

export type cardInterface = Pick<projectInterface, 'icon' | '_id' | 'title' | 'slug'>;

export type pageInterface = Omit<projectInterface, 'icon'>;
