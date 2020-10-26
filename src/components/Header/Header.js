import React, { Component } from 'react';
import { formatNumber } from '../../helpers/formatHelpers';
import css from './header.module.css';

export default class Header extends Component {
  handleInputChange = event => {
    const { onChangeFilter } = this.props;
    onChangeFilter(event.target.value);
  };

  render() {
    const { filter, countryCount, populationTotal } = this.props;
    return (
      <div className={css.flexRow}>
        <input
          placeholder="Filtro"
          type="text"
          value={filter}
          onChange={this.handleInputChange}
        />
        <span className={css.countries}>
          | Países: <strong>{countryCount}</strong>
        </span>
        <span className={css.population}>
          | População: <strong>{formatNumber(populationTotal)}</strong>
        </span>
      </div>
    );
  }
}
