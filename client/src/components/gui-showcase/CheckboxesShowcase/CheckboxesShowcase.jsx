import React, { Component } from 'react';

import Checkbox from '../../gui/Checkbox';

export class CheckboxesShowcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exampleCheckboxOne: {
        value: false,
        name: 'exampleCheckboxOne',
        label: 'exampleCheckboxOne',
      },
      exampleCheckboxTwo: {
        value: false,
        name: 'exampleCheckboxTwo',
        label: 'exampleCheckboxTwo',
      },
      exampleCheckboxThree: {
        value: false,
        name: 'exampleCheckboxThree',
        label: 'exampleCheckboxThree',
      },
      exampleCheckboxFour: {
        value: false,
        name: 'exampleCheckboxFour',
        label: 'exampleCheckboxFour',
      },
      exampleCheckboxFive: {
        value: false,
        name: 'exampleCheckboxFive',
        label: 'exampleCheckboxFive',
      },
    };

    this.handleCheckboxChange = (e) => {
      this.setState({
        [e.target.name]: {
          ...this.state[e.target.name],
          value: e.target.checked,
        },
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="showcase-display-section">
          <Checkbox
            onChange={this.handleCheckboxChange}
            name={this.state.exampleCheckboxOne.name}
            label={this.state.exampleCheckboxOne.label}
            value={this.state.exampleCheckboxOne.value}
            // optional
            marginBottom="1rem"
          />
          <Checkbox
            onChange={this.handleCheckboxChange}
            name={this.state.exampleCheckboxTwo.name}
            label={this.state.exampleCheckboxTwo.label}
            value={this.state.exampleCheckboxTwo.value}
          />
        </div>
        <div className="showcase-display-section">
          <Checkbox
            onChange={this.handleCheckboxChange}
            name={this.state.exampleCheckboxOne.name}
            label={this.state.exampleCheckboxOne.label}
            value={this.state.exampleCheckboxOne.value}
            // optional
            display="inline-block"
            marginBottom="0.5rem"
            marginRight="1rem"
          />
          <Checkbox
            onChange={this.handleCheckboxChange}
            name={this.state.exampleCheckboxTwo.name}
            label={this.state.exampleCheckboxTwo.label}
            value={this.state.exampleCheckboxTwo.value}
            // optional
            display="inline-block"
            marginBottom="0.5rem"
            marginRight="1rem"
          />
          <Checkbox
            onChange={this.handleCheckboxChange}
            name={this.state.exampleCheckboxThree.name}
            label={this.state.exampleCheckboxThree.label}
            value={this.state.exampleCheckboxThree.value}
            // optional
            display="inline-block"
            marginBottom="0.5rem"
            marginRight="1rem"
          />
          <Checkbox
            onChange={this.handleCheckboxChange}
            name={this.state.exampleCheckboxFour.name}
            label={this.state.exampleCheckboxFour.label}
            value={this.state.exampleCheckboxFour.value}
            // optional
            display="inline-block"
            marginBottom="0.5rem"
            marginRight="1rem"
          />
          <Checkbox
            onChange={this.handleCheckboxChange}
            name={this.state.exampleCheckboxFive.name}
            label={this.state.exampleCheckboxFive.label}
            value={this.state.exampleCheckboxFive.value}
            // optional
            display="inline-block"
            marginBottom="0.5rem"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CheckboxesShowcase;
