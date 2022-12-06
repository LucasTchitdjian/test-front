import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import { Date } from "./";


export default {
  title: 'Exercise/Components/Date',
  component: Date,
};

const Template = (args) => <Date {...args}></Date>;

export const PrimaryDate = Template.bind({});
PrimaryDate.args = {
  label: 'My date',
  primary: true,
  day: "23",
  month: "03"
};

export const SecondaryDate = Template.bind({});

SecondaryDate.args = {
  label: 'My secondary date',
  primary: false,
  day: "23",
  month: "03"
};

