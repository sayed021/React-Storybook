import React from 'react';
import BasicCarousel from '../Component/Organisms/Carousel/BasicCarousel';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Basic Carousel',
    component: BasicCarousel,
    decorators: [withKnobs, jsxDecorator, withInfo],
};

let carouselItems = [
    {
        id: 1,
        title: 'First slide label',
        imgurl: 'https://via.placeholder.com/1500x450',
        altText: 'First slide',
        content: '<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>',
    },
    {
        id: 2,
        title: 'Second slide label',
        imgurl: 'https://via.placeholder.com/1500x450',
        altText: 'Second slide',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'
    },
    {
        id: 3,
        title: 'Third slide label',
        imgurl: 'https://via.placeholder.com/1500x450',
        altText: 'Third slide',
        content: '<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>'
    }
]
let carouselItems2 = [
    {
        id: 1,
        title: 'First slide label',
        imgurl: 'https://via.placeholder.com/450x250',
        altText: 'First slide',
        content: '<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>',
    },
    {
        id: 2,
        title: 'Second slide label',
        imgurl: 'https://via.placeholder.com/450x250',
        altText: 'Second slide',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'
    },
    {
        id: 3,
        title: 'Third slide label',
        imgurl: 'https://via.placeholder.com/450x250',
        altText: 'Third slide',
        content: '<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>'
    }
]

export const BasicCarouselStory = () => <BasicCarousel carouselItems={carouselItems} boxstructure={boolean('Center carousel:', false)} />;
export const CarouselTwoColumn = () => <BasicCarousel carouselItems={carouselItems2} twoColumn={true} />;
export const CarouselTwoColumnReverse = () => <BasicCarousel carouselItems={carouselItems2} twoColumn={true} columnRevarse={boolean('Revarse column enable:', true)} />;

