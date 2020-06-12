import React from 'react';
import Title from '../Component/Atoms/Title/Title';
// import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';

//const stories = storiesOf('Titles', module);

// export default {
//     title: "Titles",
//     decorators: [withKnobs]
// };

// stories
//     .add('H-1', () => <Title type="h1" classes="text-light">Heading 1</Title>)
//     .add('H-2', () => <Title type="h2" classes="text-light">Heading 3</Title>)
//     .add('H-3', () => <Title type="h3">Heading 3 <a href="#">click to browse</a></Title>)
//     .add('heading 3 with link', () => <Title type="h3"><a href="#">Heading 3 click to browse</a></Title>)

export default {
    title: 'Titles',
    decorators: [
        withKnobs,
        jsxDecorator
    ]
};


export const H1 = () => <Title type="h1" classes={"text-danger " + boolean("heighlight", true)}>{text("Title text", "Heading 1")}</Title>;
export const H2 = () => <Title type="h2" classes="text-warning">Heading 2 <small>another heading</small></Title>;
export const H3 = () => <Title type="h3" >Heading 3</Title>;
export const H4 = () => <Title type="h4" >Heading 4</Title>;
export const H5 = () => <Title type="h5" >Heading 5</Title>;
export const H6 = () => <Title type="h6" >Heading 6</Title>;
