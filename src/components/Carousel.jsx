import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

export default function Carousel({ pictures }) {
  const [pictureNumber, setPictureNumbers] = useState(0);
  return (
    <div className="carousel-container">
      <div
        className="left"
        onClick={() => setPictureNumbers((pictureNumber - 1) % pictures.length)}
      >
        <img src={leftArrow} alt="left-arrow"></img>
      </div>
      <img src={pictures[pictureNumber]} alt={pictures[pictureNumber]}></img>
      <p>
        {pictureNumber + 1}/{pictures.length}
      </p>
      <div
        className="right"
        onClick={() => setPictureNumbers((pictureNumber + 1) % pictures.length)}
      >
        <img src={rightArrow} alt="right-arrow"></img>
      </div>
    </div>
  );
}
Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Carousel.defaultProps = {};
