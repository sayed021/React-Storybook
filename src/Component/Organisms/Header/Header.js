import React, { useState } from 'react';
import AppLogo from '../../Atoms/AppLogo/AppLogo';
import HeaderNav from '../../Molecules/HeaderNav/HeaderNav';
import SearchGlobal from '../../Molecules/SearchGlobal/SearchGlobal';

const Header = props => {

    const { classes } = props;
    const [navItems, setNavItems] = useState([
        {
            Id: 1,
            text: 'Home',
            link: '/',
            className: 'nav-link--active'
        },
        {
            Id: 2,
            text: 'About Us',
            link: '/about',
            className: ''
        },
        {
            Id: 3,
            text: 'Contact',
            link: 'contact',
            className: ''
        },
    ]);

    return (
        <header className={`navbar navbar-expand flex-column flex-md-row bd-navbar ${classes ? classes : ''}`}>
            <div className="navbar-brand mr-0 mr-md-2">
                <AppLogo LogoText="BS-23" />
            </div>
            <div className="navbar-nav-scroll">
                <HeaderNav navItems={navItems} />
            </div>
            <div className="navbar-nav ml-md-auto">
                <SearchGlobal />
            </div>
        </header>
    );
}

export default Header;
