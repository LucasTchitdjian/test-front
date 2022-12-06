import React from "react";

import { Adresse } from './'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Exercise/Components/Adresse',
  component: Adresse,
};

const Template = (args) => <Adresse {...args}><FontAwesomeIcon icon={faMapMarker} /> </Adresse>;

export const AdressTextGray = Template.bind({});
AdressTextGray.args = {
  place: '',
  icon: <FontAwesomeIcon icon={faMapMarker} />,
  primary: true,
};

export const AdressTextWhite = Template.bind({});
AdressTextWhite.args = {
  place: '',
  icon: <FontAwesomeIcon icon={faMapMarker} />,
  primary: false,
};