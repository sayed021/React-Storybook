import React from 'react';
import styled from 'styled-components';
import './Title.scss';

const H1 = styled.h1`
    font-size: 30px;
`;

const H2 = styled.h2`
    font-size: 26px;
`;

const H3 = styled.h3`
    font-size: 22px;
`;

const H4 = styled.h4`
    font-size: 18px;
`;

const H5 = styled.h5`
    font-size: 16px;
`;

const H6 = styled.h6`
    font-size: 14px;
`;

const Title = props => {
    const { type, classes, children } = props;

    const titleType = (type = 'h1', classes = '') => {
        switch (type) {
            case 'h2':
                return <H2 className={`title-2 ${classes ? classes : ''}`}>{children ? children : 'Heading'}</H2>
                break;

            case 'h3':
                return <H3 className={`title-3 ${classes ? classes : ''}`}>{children ? children : 'Heading'}</H3>
                break;

            case 'h4':
                return <H4 className={`title-4 ${classes ? classes : ''}`}>{children ? children : 'Heading'}</H4>
                break;

            case 'h5':
                return <H5 className={`title-5 ${classes ? classes : ''}`}>{children ? children : 'Heading'}</H5>
                break;

            case 'h6':
                return <H6 className={`title-6 ${classes ? classes : ''}`}>{children ? children : 'Heading'}</H6>
                break;

            default:
                return <H1 className={`title-1 ${classes ? classes : ''}`}>{children ? children : 'Heading'}</H1>
                break;
        }
    }


    // return the component final
    return titleType(type, classes);

}

export default Title;
