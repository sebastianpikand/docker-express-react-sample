import React from 'react';

import TextInput from '../../gui/TextInput';

const TextInputsShowcase = () => {
  return (
    <React.Fragment>
      <div className="showcase-display-section">
        <TextInput
          name="test-name"
          label="test-label"
          placeholder="test-placeholder"
          // optional arguments
          size="reg"
          marginBottom="16px"
        />
        <TextInput
          name="test-name"
          label="test-label"
          placeholder="test-placeholder"
        />
      </div>
      <div className="showcase-display-section">
        <TextInput
          name="test-name"
          label="test-label"
          placeholder="test-placeholder"
          // optional arguments
          maxWidth="240px"
          display="inline-block"
        />
        <TextInput
          name="test-name"
          label="test-label"
          placeholder="test-placeholder"
          // optional arguments
          maxWidth="240px"
          display="inline-block"
          marginLeft="1rem"
        />
      </div>
      <div className="showcase-display-section flex">
        <TextInput
          name="test-name"
          label="test-label"
          placeholder="test-placeholder"
          // optional arguments
          maxWidth="240px"
          flexGrow={1}
        />
        <TextInput
          name="test-name"
          label="test-label"
          placeholder="test-placeholder"
          // optional arguments
          marginLeft="1rem"
          flexGrow={1}
        />
        <TextInput
          name="test-name"
          label="test-label"
          placeholder="test-placeholder"
          // optional arguments
          marginLeft="1rem"
          minWidth="140px"
          flexGrow={0.5}
        />
      </div>
    </React.Fragment>
  );
};

export default TextInputsShowcase;
