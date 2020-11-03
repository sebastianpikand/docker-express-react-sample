import React from 'react';

import Container from '../../components/Container';

import { home } from './home.module.scss';

const Home = () => {
  return (
    <Container>
      <p>Welcome to Docker-Express-React-Sample boilerplate</p>
      <p className={home}>Home text</p>
    </Container>
  );
};

export default Home;
