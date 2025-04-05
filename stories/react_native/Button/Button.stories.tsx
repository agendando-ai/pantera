import React from 'react';
import { Button } from './Button';
import { View } from 'react-native';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryFn<typeof Button>;

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = {
  title: 'Primary Button',
  variant: 'primary',
};


export const Secondary: Story = (args) => <Button {...args} />;
Secondary.args = {
  title: 'Secondary Button',
  variant: 'secondary',
};

export const Outline: Story = (args) => <Button {...args} />;
Outline.args = {
  title: 'Outline Button',
  variant: 'outline',
};

export const Loading: Story = (args) => <Button {...args} />;
Loading.args = {
  title: 'Loading...',
  loading: true,
};
