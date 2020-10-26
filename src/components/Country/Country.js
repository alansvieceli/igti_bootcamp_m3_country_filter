import React, { Component } from 'react';
import css from './country.module.css';

export default class Country extends Component {
  render() {
    const { data } = this.props;
    const { name, flag } = data;

    return (
      <div className={`${css.country} ${css.border}`}>
        <img className={css.flag} src={flag} alt={name} />
        <span className={css.countryName}>{name}</span>
      </div>
    );
  }
}
