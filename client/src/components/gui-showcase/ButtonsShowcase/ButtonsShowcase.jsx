import React from 'react';

import Button from '../../gui/Button';

const ButtonsShowcase = () => {
  return (
    <div className="showcase-display-section">
      <h5>Regular sizes</h5>
      <Button CTA="Primary button" />
      <Button CTA="Secondary button" style="btn-secondary" size="btn-reg" />
      <h5>Block style</h5>
      <Button CTA="Block style button" btnblock={true} />
      <Button
        CTA="Block style button"
        btnblock={true}
        style="btn-secondary"
        size="btn-reg"
      />
    </div>
  );
};

export default ButtonsShowcase;
