import React from 'react';
import { storiesOf } from "@storybook/react";

import Title from "./";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Exercise/Components/Title',
  component: Title,
};

const Template = (args) => <Title {...args}></Title>;

export const MainCardTextWhite = Template.bind({});
MainCardTextWhite.args = {
  text: 'Le Printemps des Jardiniers',
  textclass: 'mainText',
  url: ''
};

export const SubCardText = Template.bind({});
SubCardText.args = {
  text: 'Conférence sur le frelon asiatique',
  textclass: 'subText'
};
