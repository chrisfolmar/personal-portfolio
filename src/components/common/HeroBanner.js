import React from 'react';

function HeroBanner({ title, subtitle, buttonText, buttonLink }) {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
}

export default HeroBanner;
