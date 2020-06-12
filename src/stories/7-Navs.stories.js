import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import HeaderNav from '../Component/Molecules/HeaderNav/HeaderNav';

export default {
    title: 'Navs',
    decorators: [
        withKnobs,
        jsxDecorator
    ]
};


let navItems = [
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
];


export const DefaultNav = () => <HeaderNav navItems={navItems} />