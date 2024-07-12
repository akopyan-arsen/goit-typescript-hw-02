export interface Image {
  user: {
    instagram_username: string;
  }
    id: string;
    urls: {
      regular: string;
      small: string;
    };
    description: string;
    alt_description: string;
  }
  
  export interface FetchImagesResponse {
    results: Image[];
    total_pages: number;
  }