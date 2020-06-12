import React from 'react';
import './SearchBox.scss';

const SearchBox = props => {
    const { placeholderText, classes } = props;

    return (
        <input {...props} type="search" name="search" className={`search form-control ${classes ? classes : ''}`} id="search" placeholder={placeholderText ? placeholderText : 'input box'} />
    );
}

export default SearchBox;
