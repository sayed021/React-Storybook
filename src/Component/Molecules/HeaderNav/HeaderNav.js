import React from 'react';
import Navlink from '../../Atoms/Navlink/Navlink';
import './HeaderNav.scss';

const HeaderNav = props => {
    const { navItems } = props;
    return (
        <>
            <nav>
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    {
                        (navItems || []).map(navitem => (
                            <li key={navitem.key} className="nav-item"><Navlink modifireClass={navitem.className} link={navitem.link} text={navitem.text} /></li>
                        ))
                    }
                </ul>
            </nav>
        </>
    );
}

export default HeaderNav;
