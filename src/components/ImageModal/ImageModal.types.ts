import { Photo } from "../../images-api"; 

export type ImageModalProps = {
    onClose: () => void;
    onOpen: boolean;
    photo: Photo | null;
};