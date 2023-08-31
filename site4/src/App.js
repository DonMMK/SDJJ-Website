/* eslint-disable no-unused-vars */
import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <CTA />
    {/* <Brand /> */}
    <WhatGPT3 />
    <Possibility />
    <Blog />
    <Features />
    <Footer />
  </div>
);

export default App;
