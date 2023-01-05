import React from 'react'

import InterestSlider from '../../../components/InterestSlider/InterestSlider';
import "./BioSection.css"

function BioSection() {
  return (
    <div id="bio-section">
      <h2>About Me</h2>
      <div id="bio-container">
        <p>
          As a former writer, I loved the creativity and challenges that came
          with writing. My desire for challenges eventually led me to an
          introduction to computer science course, which sparked my love for
          coding. A year later, I enrolled in a Software Engineering Immersive
          programing. Through this, I was able to hone and grow my knowledge and
          skills. I am now looking for opportunities where I can share my
          knowledge and learn from others.
        </p>
      </div>
      <InterestSlider />
    </div>
  );
}

export default BioSection