import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
const myId = 'OH9SRebkNECiFOw7Ax0d-qkbLdWdfVS1_TVBOyPMyT8';

export type Photo = {
    id: string;
    urls: { small: string; regular: string };
    description: string;
};

type FetchPhotosResponse = {
    results: Photo[];
    total_pages: number;
    total: number;
};

export async function fetchPhotos(searchQuery: string, currentPage: number): Promise<FetchPhotosResponse> {
    const response = await axios.get<FetchPhotosResponse>('/search/photos/',{
        params: {
            client_id: myId,
            query: searchQuery,
            per_page: 12,
            page: currentPage,
            orientation: 'landscape',
        }
    })
    return response.data;
};