import React from 'react';
import SearchBox from '../../Atoms/SearchBox/SearchBox';
import Button from '../../Atoms/Button/Button';

const SearchGlobal = () => {
    return (
        <form action="#" className="d-flex">
            <SearchBox
                placeholderText="Search here.."
                classes="rounded-right"
            />

            <Button
                buttonText="Search"
                type="submit"
                classes="btn-primary rounded-0 rounded-right"
            />
        </form>
    );
}

export default SearchGlobal;
