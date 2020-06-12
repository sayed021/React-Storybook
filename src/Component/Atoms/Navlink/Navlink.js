import React from 'react';
import './Navlink.scss';

const Navlink = props => {
    const { modifireClass, link, text } = props;
    return (
        <a href={link ? link : '#'} className={`nav-link ${modifireClass ? modifireClass : ''}`} >{text ? text : 'Nav-link'}</a>
    );
}

export default Navlink;
