import React from 'react';
import HeroBanner from '../common/HeroBanner';
import FeatureSection from '../common/FeatureSection';
import Testimonials from '../common/Testimonials';

function HomePage() {
  return (
    <div className="home-page">
      <HeroBanner
        title="Welcome to My Website"
        subtitle="A modern and sleek web application"
        buttonText="Learn More"
        buttonLink="/about"
      />
      <FeatureSection />
      <Testimonials />
    </div>
  );
}

export default HomePage;
