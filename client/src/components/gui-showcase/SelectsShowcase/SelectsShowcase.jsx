import React, { Component } from 'react';

import { Select } from '../../gui/Select';

const selectOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export class SelectsShowcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
    };

    this.handleSelectChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="showcase-display-section">
          <Select
            selectOptions={selectOptions}
            name="test-name"
            label="test-label"
            onChange={this.handleSelectChange}
            // optional arguments
            value={this.state.selectedOption}
            placeholder="test-placeholder"
            size="reg"
          />
        </div>

        <div className="showcase-display-section">
          <Select
            selectOptions={selectOptions}
            name="test-name"
            label="test-label"
            onChange={this.handleSelectChange}
            // optional arguments
            placeholder="test-placeholder"
            maxWidth="240px"
            display="inline-block"
          />
          <Select
            selectOptions={selectOptions}
            name="test-name"
            label="test-label"
            onChange={this.handleSelectChange}
            // optional arguments
            placeholder="test-placeholder"
            maxWidth="240px"
            display="inline-block"
            marginLeft="1rem"
          />
        </div>
        <div className="showcase-display-section flex">
          <Select
            selectOptions={selectOptions}
            name="test-name"
            label="test-label"
            onChange={this.handleSelectChange}
            // optional arguments
            placeholder="test-placeholder"
            maxWidth="240px"
            flexGrow={1}
          />
          <Select
            selectOptions={selectOptions}
            name="test-name"
            label="test-label"
            onChange={this.handleSelectChange}
            // optional arguments
            placeholder="test-placeholder"
            marginLeft="1rem"
            flexGrow={1}
          />
          <Select
            selectOptions={selectOptions}
            name="test-name"
            label="test-label"
            onChange={this.handleSelectChange}
            // optional arguments
            marginLeft="1rem"
            placeholder="test-placeholder"
            minWidth="140px"
            flexGrow={0.5}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default SelectsShowcase;
