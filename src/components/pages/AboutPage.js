import React from 'react';
import aboutImage from '../../assets/images/about-image.jpg';

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <img src={aboutImage} alt="About Me" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra massa sed neque tincidunt eleifend.</p>
    </div>
  );
}

export default AboutPage;
