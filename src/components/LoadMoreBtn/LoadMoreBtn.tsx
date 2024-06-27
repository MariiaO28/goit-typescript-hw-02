import React from 'react';
import { LoadMoreButtonProps } from './LoadMoreBtn.types';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn: React.FC<LoadMoreButtonProps> = ({onLoadMore}) => {
    return (
        <button onClick={onLoadMore} className={css.button} type="button">Load more</button>
    )
};

export default LoadMoreBtn;