import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import css from "./index.module.scss";
import './title.css'


export const Title = ({ text, textclass, url }) => {

  return (
    <a href={url}>
      <h1 className={textclass}>{text}</h1>
    </a>
  )
}


Title.propTypes = {
  text: PropTypes.string.isRequired,
  class: PropTypes.string,
  url: PropTypes.string,
};
Title.defaultProps = {
  title: "le Printemps des Jardiniers",
};

export default Title;
