import React from "react";
import './About.css';

export const About = () => {
  return (
  <div class="container">

  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <h3 class="h3">Front</h3>
      </div>
      <div class="card-back">
        <p>This is the back of the card</p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <h3 class="h3">Front</h3>
      </div>
      <div class="card-back">
        <p>This is the back of the card</p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <h3 class="h3">Front</h3>
      </div>
      <div class="card-back">
        <p>This is the back of the card</p>
      </div>
    </div>
  </div>

  </div> // closing tag for container
  );
};

export default About;