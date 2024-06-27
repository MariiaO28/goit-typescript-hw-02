import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGallery.types';
import css from './ImageGallery.module.css';

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {

    return (
        <ul className={css.list}> 
            {photos.map((photo) => (
                <li key={photo.id}>
                    <ImageCard photo={photo} openModal={openModal}/>
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;