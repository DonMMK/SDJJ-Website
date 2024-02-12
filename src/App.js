/* eslint-disable no-unused-vars */
import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { FeatureVideo, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header /> {/* Intro/cover page */}
    </div>
    <FeatureVideo /> {/* gym video */}
    {/* <Brand /> */}
    <WhatGPT3 /> {/* Timetable */}
    <Blog /> {/* Services */}
    <Possibility /> {/* About us */}
    <Features /> {/* Contact us */}
    <Footer />
  </div>
);

export default App;
