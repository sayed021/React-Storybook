import React from 'react';
import './Button.scss';

const Button = props => {
    const { classes, buttonText, type, children } = props;
    return (
        <button type={type ? type : 'button'} className={`btn  ${classes ? classes : ''}`} {...props}>
            {buttonText ? buttonText : ''}
            {children}
        </button>
    );
}

export default Button;
