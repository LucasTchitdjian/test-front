import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import { Button } from "./";


export default {
  title: 'Exercise/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args}><FontAwesomeIcon icon={faMapMarker} /></Button>;

export const WithText = Template.bind({});
WithText.args = {
  primary: true,
  label: 'My button',
};

export const WithSomeEmoji = Template.bind({});

WithSomeEmoji.args = {
  label: <span role="img" aria-label="so cool">😀 😎 👍 💯</span>,
};

export const WithFontAwesome = Template.bind({});

WithFontAwesome.args = {
  label: <FontAwesomeIcon icon={faMapMarker} />,
};

export const WithType = Template.bind({});

WithType.args = {
  component: Button,
  label: 'My button',
  type: 'dark'
};

export const WithSize = Template.bind({});

WithSize.args = {
  component: Button,
  label: 'My button',
  size: 'sm'
};

export const WithUrl = Template.bind({});
WithUrl.args = {
  size: 'sm',
  label: 'Button',
  primary: true,
  url: '',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
  primary: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
  primary: true,
};
















// storiesOf('Exercise/Components/Button', module)
//   .add('with text', () => (
//     <Button>My button</Button>
//   )).add('with some emoji', () => (
//     <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//   )).add("with font-awesome", () => (
//     <Button>
//       <FontAwesomeIcon icon={faMapMarker} />
//     </Button>
//   )).add('with type', () => (
//     <Button type="dark">My button</Button>
//   )).add('with size', () => (
//     <Button size="sm">My button</Button>
//   ));

