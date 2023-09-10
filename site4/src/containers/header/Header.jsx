import React from 'react';
import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import firstpagebackground from '../../assets/sdjj_pictures/firstpagebackground.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Bringing the focus of Jiu-Jitsu back to Martial Art and less so this Sport-centric focus and culture</h1>
      <p>With over 20 years experience in Brazilian Jiu Jitsu and Mixed Martial Arts. Stacked Deck Jiu Jitsu is the place to start. There are a variety of classes, personal one-on-one training available and a fully functional gym set up waiting for you.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={firstpagebackground} />
    </div>
  </div>
);

export default Header;
