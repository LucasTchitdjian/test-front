import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

import { Date } from '../Date';
import { Adresse } from '../Adresse';
import { Title } from "../Title";

import Events from '../../mocks/events.json'


export const Event = ({ }) => {


  return (
    <div className="event">
      {Events.map((event) => {
        {
          const [jour, mois, annee] = event.date.split('/');
          return (
            <div className={css.card}>
              <a href={event.url}>
                <div className={css.card__container}>
                  <span className={css.date__container}>
                    <Date day={jour} month={mois} />
                  </span>
                  <span className={css.emoji}>{event.icon}</span>
                  <div className={css.addr__container}>
                    <Title text={event.title} textclass="subText" />
                    <Adresse primary="true" place={Events[0].address.place} />
                  </div>
                </div>
              </a>
            </div>
          )
        }
      })}
    </div>
  )
};

Event.propTypes = {
  emoji: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string
};

Event.defaultProps = {
  emoji: '🐝',
};
