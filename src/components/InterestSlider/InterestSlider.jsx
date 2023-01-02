import React, { useState} from 'react'
import { UilAngleRightB } from "@iconscout/react-unicons";
import { UilAngleLeftB } from "@iconscout/react-unicons";

import Image1 from "../../assets/image-1.png";
import Image2 from "../../assets/image-2.png";
import Image3 from "../../assets/image-3.png";
import { interests } from '../../data/interests';

import "./InterestSlider.css"

function InterestSlider() {

    const [interest, setInterests] = useState(interests);
    const [imgUrl, setImgUrl] = useState([
      Image1,
      Image2,
      Image3
    ])
    const [index, setIndex] = useState(0)

  const prevInt = () => {
    if (index > 0 && index < 3) {
      setIndex((prev) => prev - 1)
    } else if (index === 0) {
      setIndex(2)
    }
  }

  const nextInt = () => {
    if (index >= 0 && index < 2) {
       setIndex((prev) => prev + 1);
    } else if (index === 2) {
      setIndex(0)
    }
  };

  return (
    <div id="interest-container">
      <div id="interest-heading">Interests</div>
      <div id="interest-slider-container">
        <div className="slider-icon-container">
          <UilAngleLeftB
            className="slider-button"
            onClick={prevInt}
            size="200"
          />
        </div>
        <div id="slider-container">
          <div id="slider-image-container">
            <img
              id="slider-image"
              src={imgUrl[index]}
              alt={interest[index].name}
            />
          </div>
          <div id="slider-description-container">
            <h3>{interest[index].name}</h3>
            <p>{interest[index].description}</p>
          </div>
        </div>

        <div className="slider-icon-container">
          <UilAngleRightB
            className="slider-button"
            onClick={nextInt}
            size="200"
          />
        </div>
      </div>
    </div>
  );
}

export default InterestSlider