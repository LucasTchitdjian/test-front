import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import { Event } from ".";

import { Events } from '../../mocks/events.json'


export default {
  title: 'Exercise/Components/Event',
  component: Event,
};

const Template = (args) => <Event {...args}></Event>;

export const FirstEvents = Template.bind({});
FirstEvents.args = {
  emoji: '🐝',
  title: "",
  url: 'https://www.savigny-le-temple.fr/content/attention-aux-frelons-asiatiques',
  day: "05",
  month: "03"
};
