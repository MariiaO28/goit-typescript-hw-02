import { Photo } from '../../images-api';

export type FullPhotoInfo = Photo & {
    likes: number;
    user: { name: string };
};

export type ImageCardProps = {
    photo: FullPhotoInfo;
    openModal: (photo:Photo) => void;
};