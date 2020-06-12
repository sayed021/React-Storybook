import React from 'react';
import './AppLogo.scss';

const AppLogo = props => {
    const { LogoText, classes, children } = props;
    return (
        <>
            <a href="/" {...props} className={`applogo  ${classes ? classes : ''}`} >{LogoText ? LogoText : ''}{children}</a>
        </>
    );
}

export default AppLogo;
