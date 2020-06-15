import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CenterWrapper from '../../Molecules/CenterWrapper';

import './carousel.scss';

const BasicCarousel = props => {
    const { carouselItems, boxstructure, twoColumn, columnRevarse } = props;

    let carouselHtml = (<Carousel {...props}>
        {
            (carouselItems || []).map(item => (
                <Carousel.Item key={item.id}>
                    <div className={`container-fluid${twoColumn ? '-fluid' : ''}`} style={{ background: twoColumn ? '#666' : '#fff' }}>
                        <div className={`${twoColumn ? 'row d-flex align-items-center' : 'row'} `}>
                            <div className={`${twoColumn ? 'col-md-6' : 'col-12 p-0'} ${columnRevarse ? 'order-md-2' : ''}`}>
                                <img
                                    className="d-block w-100"
                                    src={item.imgurl}
                                    alt={item.altText}
                                />
                            </div>

                            <div className={`${twoColumn ? 'col-md-6' : 'col-12 p-0'} ${columnRevarse ? 'order-md-1' : ''}`}>
                                <Carousel.Caption className={`${twoColumn ? 'position-relative left-initial right-initial bottom-initial z-index-initial' : ''}`}>
                                    <h3>{item.title} </h3>
                                    <div dangerouslySetInnerHTML={{ __html: item.content ? item.content : '' }}></div>
                                </Carousel.Caption>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))
        }
    </Carousel >)

    return (
        <>
            {
                boxstructure ? (
                    <CenterWrapper>
                        {carouselHtml}
                    </CenterWrapper>
                ) : (carouselHtml)
            }
        </>

    )
}

export default BasicCarousel;
