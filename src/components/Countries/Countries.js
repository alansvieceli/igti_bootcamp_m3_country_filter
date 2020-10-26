import React, { Component } from 'react';
import Country from '../Country';
import css from './countries.module.css';

export default class Countries extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={`${css.border} ${css.flexRow}`}>
        {data.map(country => {
          return <Country key={country.id} data={country} />;
        })}
      </div>
    );
  }
}
