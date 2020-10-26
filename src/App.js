import React, { Component } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const filteredPopulation = this.calculateTotalPopulation(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation,
    });
  }

  calculateTotalPopulation = array_value => {
    return array_value.reduce((acc, crr) => {
      return acc + crr.population;
    }, 0);
  };

  handleChangeFilter = value => {
    const { allCountries } = this.state;
    this.setState({
      filter: value,
    });

    const valueLower = value.toLowerCase();
    const filteredCountries = allCountries.filter(country => {
      return country.filterName.includes(valueLower);
    });

    const filteredPopulation = this.calculateTotalPopulation(filteredCountries);

    this.setState({
      filteredCountries,
      filteredPopulation,
    });
  };

  render() {
    const { filteredCountries, filter, filteredPopulation } = this.state;
    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React - Countries</h1>
        <Header
          filter={filter}
          onChangeFilter={this.handleChangeFilter}
          countryCount={filteredCountries.length}
          populationTotal={filteredPopulation}
        />
        <Countries data={filteredCountries} />
      </div>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
};
