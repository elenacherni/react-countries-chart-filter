import React from 'react';
import Select, { components } from 'react-select';
import Api from '../AppApi.js';

export default class CountriesFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const MultiValueContainer = selectProps => {
      let optionSelected = selectProps.data.value;
      let arrayOpts = this.props.currentValue;
      let currentLastValue = arrayOpts[arrayOpts.length - 1].value;
      let addComma = true;
      if (currentLastValue === optionSelected) {
        addComma = false;
      }
      return (
        <span className={addComma ? 'add-comma' : ''}>
          <components.MultiValueContainer {...selectProps} />
        </span>
      );
    };

    return (
      <Select
        className={'padding-top-30'}
        options={Api.getFilterOpts()}
        onChange={this.props.onChangeInput}
        placeholder={'Filter by country names...'}
        isMulti
        components={{ MultiValueContainer }}
      />
    );
  }
}
