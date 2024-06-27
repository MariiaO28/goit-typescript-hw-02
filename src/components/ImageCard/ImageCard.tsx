import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { FcLike } from 'react-icons/fc';
import { ImageCardProps } from './ImageCard.types';
import css from './ImageCard.module.css'

const ImageCard:React.FC<ImageCardProps> = ({ photo: { description, likes, user: { name }, urls: { small, regular } }, openModal }) =>
{
    return (
        <div className={css.card} >
            <img className={css.image} src={small} alt={description} onClick={() => openModal( regular, description)} />
            <div className={css.description}>
                <p className={css.text}><RxAvatar className={css.icon} size="24" />{name}</p>
                <p className={css.text}><FcLike className={css.icon} size="24"/> {likes} </p>
            </div>
        </div>
    )
}

export default ImageCard;