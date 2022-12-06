import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import css from "./index.module.scss";
import './adresse.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import Events from '../../mocks/events.json'



export const Adresse = ({ primary, place, icon }) => {
  const mode = primary ? 'primary' : 'secondary'; // Choose between primary = text in gray and secondary = text in white and italic

  return (
    <p className={['adresse', mode].join(' ')}>{icon}{Events[0].address.place}</p>
  )
}


Adresse.propTypes = {
  primary: PropTypes.bool,
  place: PropTypes.string,
  icon: PropTypes.string,
};
Adresse.defaultProps = {
  primary: false,
  place: "",
  icon: <FontAwesomeIcon icon={faMapMarker} />,
};

export default Adresse;
