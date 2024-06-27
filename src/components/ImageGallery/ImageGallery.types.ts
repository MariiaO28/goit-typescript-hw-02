import { Photo } from '../../images-api';

export type ImageGalleryProps = {
    photos: Photo[];
    openModal: (photo:Photo) => void;
};