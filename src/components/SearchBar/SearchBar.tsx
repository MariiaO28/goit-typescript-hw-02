import React, { FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { SearchBarProps } from './SearchBar.types';
import css from './SearchBar.module.css';

const notify = () => toast.error("Please enter requested value!");

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const topic = form.search.value.trim();
    if (topic === "") {
        notify();
        form.reset();
    } else {
        onSearch(topic);
        form.reset();
    }
    };

    return (
    <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <button className={css.search} type="submit"><FaMagnifyingGlass/> </button>
                <input
                    className={css.input}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
                <Toaster position="top-center" reverseOrder={false}/>
            </form>
    </header>
    )
}
export default SearchBar;