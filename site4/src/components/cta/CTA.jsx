import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">Get Started</button>
    </div>
    {/* This next div has approirate stylind and has an embedded url
    of  https://www.youtube.com/watch?v=0My9AGbp1rw&ab_channel=StackedDeckJiuJitsu
    and starts playing the video as the person scrolls past with no audio */}
    <div className="gpt3__cta-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0My9AGbp1rw?autoplay=1&mute=1&loop=1&playlist=0My9AGbp1rw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  </div>
);

export default CTA;
