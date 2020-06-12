import React from 'react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import SearchBox from '../Component/Atoms/SearchBox/SearchBox';

export default {
    title: 'Text inputs',
    component: SearchBox,
    decorators: [
        withKnobs,
        jsxDecorator
    ]
};

export const InputSearh = () => <SearchBox type="search" placeholderText={text('pleaceholder:', 'Search here..')} classes='' />;
export const InputText = () => <SearchBox type="text" placeholderText={text('pleaceholder:', 'Enter your full name')} classes='' />;
export const InputTextLarge = () => <SearchBox type="text" placeholderText={text('pleaceholder:', 'Enter your full name')} classes='form-control-lg' />;

export const InputTextMedium = () => <SearchBox type="text" placeholderText={text('pleaceholder:', 'Enter your full name')} classes='form-control-md' />;

export const InputTextSmall = () => <SearchBox type="text" placeholderText={text('pleaceholder:', 'Enter your full name')} classes='form-control-sm' />;

export const InputDisabled = () => <SearchBox type="text" disabled={boolean('Disabled:', true)} placeholderText={text('pleaceholder:', 'Enter your full name')} value="Disabled input" />;

export const InputReadOnlyText = () => <SearchBox type="text" readonly={boolean('Readonly is true:', true)} value={text("Input Text:", "Read only input text")} />;

