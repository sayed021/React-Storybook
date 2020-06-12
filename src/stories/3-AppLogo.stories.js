import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import AppLogo from '../Component/Atoms/AppLogo/AppLogo';

export default {
    title: 'App logo',
    component: AppLogo,
    decorators: [
        withKnobs,
        jsxDecorator
    ]
};

export const Logo = () => <AppLogo>{text("Label:", "App-logo")}</AppLogo>;
