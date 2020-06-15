import React from 'react';

const CenterWrapper = props => {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default CenterWrapper;
