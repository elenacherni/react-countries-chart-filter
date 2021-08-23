import React from 'react';
import './style.css';
import Chart from './components/Chart.js';
import Api from './AppApi.js';
import CountriesFilter from './components/CountriesFilter.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: Api.getChartData(),
      filterValue: []
    };
  }

  onChangeInput(value) {
    this.setState({ filterValue: value });
    if (value.length === 0) {
      const fullData = Api.getChartData();
      this.setState({ chartData: fullData });
    } else {
      const customData = Api.getCustomChartData(value);
      this.setState({ chartData: customData });
    }
  }

  render() {
    return (
      <>
        <h1>Annual Revenue</h1>
        <h4>Apply some filters to see some magic happen :)</h4>
        <CountriesFilter
          onChangeInput={value => this.onChangeInput(value)}
          currentValue={this.state.filterValue}
        />
        <Chart data={this.state.chartData} />
      </>
    );
  }
}
