import React from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
    return (
        <p className={css.error}>Oops...Something went wrong. Please try again.</p>
    )
}

export default ErrorMessage;