import React from 'react';
import { Link } from 'react-router-dom';

const DemoPage = () => {
  return (
    <div>
      <p>Demo page</p>
      <Link to="/gui">GUI page</Link>
      <Link to="/version">Version page</Link>
    </div>
  );
};

export default DemoPage;
