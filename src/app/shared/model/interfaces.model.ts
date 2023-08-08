export enum ImageSizeEnum {
  size200 = '/full/200,/0/default.jpg',
  size400 = '/full/400,/0/default.jpg',
  size600 = '/full/600,/0/default.jpg',
  size843 = '/full/843,/0/default.jpg',
}
export interface Artwork {
  pagination: Pagination;
  data: Datum[];
  info: Info;
  config: Config;
}

export interface Config {
  iiif_url: string;
  website_url: string;
}

export interface Datum {
  artist_title?: string;
  title: string;
  image_id: null | string;
  exhibition_history?: null | string;
}

export interface Info {
  license_text: string;
  license_links: string[];
  version: string;
}

export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}
