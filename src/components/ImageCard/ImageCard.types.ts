import { Photo } from '../../images-api';

export type ImageCardProps = {
    photo: Photo;
    openModal: (imageUrl: string, description: string) => void;
};