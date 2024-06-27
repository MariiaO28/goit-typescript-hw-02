import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
    return (
        <div className={css.loader}>
            <ThreeDots
                visible={true}
                height={60}
                width={60}
                color="#4682B4"
                radius={9}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
            />
        </div>
    );
};

export default Loader;