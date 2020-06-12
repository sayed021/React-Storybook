import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import Header from '../Component/Organisms/Header/Header';

export default {
    title: 'App Header',
    component: Header,
    decorators: [
        withKnobs,
        jsxDecorator
    ]
};

export const PrimaryHeader = () => <Header classes="bg-primary" />;
export const SecondaryHeader = () => <Header classes="bg-secondary" />;
export const LightHeader = () => <Header classes="bg-light" />;