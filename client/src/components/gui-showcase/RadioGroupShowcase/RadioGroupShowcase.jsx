import React, { Component } from 'react';

import RadioGroup from '../../gui/RadioGroup';

export class RadioGroupShowcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radioOptions: [
        { label: 'optionOne', value: 'optionOne' },
        { label: 'optionTwo', value: 'optionTwo' },
        { label: 'optionThree', value: 'optionThree' },
      ],
      selectedOption: '',
    };

    this.onRadioGroupChange = (value) => {
      this.setState({ selectedOption: value });
    };
  }

  render() {
    return (
      <div>
        <RadioGroup
          name="radioGroupExample"
          options={this.state.radioOptions}
          selected={this.state.selectedOption}
          onChange={this.onRadioGroupChange}
        />
        <p>{this.state.selectedOption}</p>
      </div>
    );
  }
}

export default RadioGroupShowcase;
