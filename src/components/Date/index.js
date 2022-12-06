import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import './date.css';


export const Date = ({ primary, day, month }) => {
  const mode = primary ? 'primary' : 'secondary'; // Choose between primary = date with a background or secondary date with transparent background
  return (
    <div className={['date', mode].join(' ')}><div className="month">{month}</div><div className="day">{day}</div></div> // Printing the date of an event
  )
};

Date.propTypes = {
  primary: PropTypes.bool,
  day: PropTypes.string,
  month: PropTypes.string
};

Date.defaultProps = {
  backgroundColor: null,
  size: "md",
  primary: false,
  day: "23",
  month: "03"
};
