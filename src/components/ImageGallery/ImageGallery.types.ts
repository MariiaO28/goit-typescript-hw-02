import { Photo } from "../../images-api";

export type ImageGalleryProps = {
    photos: Photo[];
    openModal: (imageUrl: string, description: string) => void;
};