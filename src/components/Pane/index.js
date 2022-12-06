import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button'
import Title from '../Title'

// import css from "./index.module.scss";
import './pane.css'

import Events from '../../mocks/events.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Date } from "../Date";
import { Adresse } from "../Adresse";
import { Event } from "../Event";


export const Pane = ({ cover }) => {
  const [jour, mois, annee] = Events[0].date.split('/');
  return (
    <div className="main">
      <div className="pane" style={{ background: "linear-gradient(to bottom, rgba(220, 220, 220, 0.1), rgba(86, 97, 90, 0.93)), url(" + cover + ")", backgroundSize: "cover" }}>
        <div className="container">
          <div className="left">
            <div className="leftContainer">
              <Date
                primary="true"
                day={jour}
                month={mois} />
              <Title
                textclass="mainText"
                text="Printemps des jardiniers" />
            </div><Adresse />
          </div>
          <div className="right">
            <Button
              url={Events[0].url}
              primary="true"
              size="sm"
              label={<FontAwesomeIcon
                icon={faArrowRight} />}
            >
            </Button>
          </div>
        </div>
      </div>
      <Event />
    </div>
  );
};

Pane.propTypes = {
  cover: PropTypes.string,
};

Pane.defaultProps = {
};

export default Pane;
