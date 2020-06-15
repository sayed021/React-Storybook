module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-jsx/register',
    '@storybook/addon-backgrounds/register',
  ],
};
