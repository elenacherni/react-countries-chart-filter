import backend from './backend.js';

class Dataset {
  constructor(label, backgroundColor, customData) {
    this.label = label;
    this.data = Api.getValuesArrayByKey(this.label, customData);
    this.backgroundColor = backgroundColor;
  }
}

class Option {
  constructor(value) {
    this.value = value;
    this.label = value;
  }
}

let Api = {
  //returns the provided data in the needed format of the chart
  buildDataChart(customData) {
    const finalData = {
      labels: this.getValuesArrayByKey('country', customData),
      datasets: [
        new Dataset('male', 'rgb(54, 162, 235, 0.5)', customData),
        new Dataset('female', 'rgb(255, 99, 132, 0.5)', customData),
        new Dataset('unspecified', 'rgb(153, 102, 255, 0.5)', customData)
      ]
    };
    return finalData;
  },

  //returns the full backend data in the needed format of the chart
  getChartData() {
    return this.buildDataChart(backend);
  },

  //returns one-dimensional array of the requested key values in the provided data
  getValuesArrayByKey(key, customData) {
    return customData.map(obj => obj[key]);
  },

  //returns country options in the needed format of the filter input
  getFilterOpts() {
    const countries = this.getValuesArrayByKey('country', backend);
    return countries.map(country => new Option(country));
  },

  //returns the requested countries data in the needed format of the chart
  getCustomChartData(optsArr) {
    const countries = optsArr.map(option => option.value);
    let list = [];
    backend.map(obj => {
      if (countries.indexOf(obj.country) !== -1) {
        list.push(obj);
      }
    });
    return this.buildDataChart(list);
  }
};

export default Api;
