import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import SearchGlobal from '../Component/Molecules/SearchGlobal/SearchGlobal';

export default {
    title: 'Search Global',
    component: SearchGlobal,
    decorators: [
        withKnobs,
        jsxDecorator
    ]
};

export const SearchBox = () => <SearchGlobal />;