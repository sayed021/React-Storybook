import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Component/Atoms/Button/Button';
// import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { jsxDecorator } from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, jsxDecorator, withInfo],
  parameters: {
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  },
};

export const LinkButton = () => <Button
  buttonText="Button Link"
  type="submit"
  classes="btn-link" onClick={action('clicked')}>Link</Button>;

export const PrimaryButton = () => (
  <Button
    buttonText=""
    type="submit"
    classes="btn-primary" onClick={action('clicked')}>
    Primary Button
  </Button>
);

export const PrimaryButtonWithEmojo = () => (
  <Button
    buttonText=""
    type="submit"
    classes="btn-primary" onClick={action('clicked')}>
    Primary Button  <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);


export const LikeButton = () => (
  <Button
    buttonText=""
    type="submit"
    classes="btn-link">
    👍 <span role="img" aria-label="so cool">
      {text('label', ' 500k')}
    </span>
  </Button>
);

export const DangerButton = () => (
  <Button
    buttonText={text('label', "Danger Button")}
    type="submit"
    classes="btn-danger"
  />
);

export const ButtonInfo = () => (
  <Button
    buttonText={text('label', "Button info")}
    type="submit"
    classes="btn-info"
  />
);

export const ButtonWarning = () => (
  <Button
    buttonText={text('label', "Warning button")}
    type="submit"
    classes="btn-warning"
  />
);

export const ButtonDrak = () => (
  <Button
    buttonText={text('label', "Drak Button")}
    type="submit"
    classes="btn-dark"
  />
);

export const ButtonDangerDisabled = () => (
  <Button
    disabled={boolean("Disabled", true)}
    buttonText={text('label', 'Disabled button')}
    type="submit"
    classes="btn-danger"
  />
);


