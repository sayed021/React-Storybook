import React from 'react';
import Navlink from '../Component/Atoms/Navlink/Navlink';


import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';


export default {
    title: 'links',
    decorators: [
        withKnobs,
        jsxDecorator
    ]
};

export const LinkDefault = () => <Navlink href="#" onClick={action('clicked')} >{text("Title text", "Default link")}</Navlink>;
export const LinkActive = () => <Navlink href="#" onClick={action('clicked')} modifireClass="nav-link--active">{text("Title text", "active link")}</Navlink>;
export const LinkDisabled = () => <Navlink href="#" onClick={action('clicked')} modifireClass="disabled">{text("Title text", "Disabled link")}</Navlink>;
export const LinkSuccess = () => <Navlink href="#" onClick={action('clicked')} modifireClass="text-success">{text("Title text", "Disabled link")}</Navlink>;


