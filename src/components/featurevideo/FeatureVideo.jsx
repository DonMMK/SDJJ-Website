/* eslint-disable object-curly-spacing */
import React from 'react';
import './featurevideo.css';

const FeatureVideo = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      {/* <p>Request Early Access to Get Started</p> */}
      <h3 style={{marginRight: '1rem' }}>Have you ever wanted to learn a martial art? Start today and fulfil that desire .</h3>
    </div>
    <div className="gpt3__cta-video" style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0My9AGbp1rw?autoplay=1&mute=1&loop=1&playlist=0My9AGbp1rw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
    {/* <div className="gpt3__cta-btn">
      <button type="button">Get Started</button>
    </div> */}
  </div>
);

export default FeatureVideo;
