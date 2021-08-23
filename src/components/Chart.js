import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Bar className={'padding-top-30'} data={this.props.data} />;
  }
}
