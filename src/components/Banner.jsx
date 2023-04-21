// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Banner({ img, text, mod }) {
  if (text !== undefined) {
    return (
      <div className={`banner ${mod === 'desktop' ? 'desktop' : 'responsive'}`}>
        <img src={img} alt={img}></img>
        <p>{text}</p>
      </div>
    );
  }
  return (
    <div className="banner">
      <img src={img} alt={img}></img>
    </div>
  );
}
Banner.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string,
  mod: PropTypes.oneOf(['desktop', 'responsive']),
};
Banner.defaultProps = {
  img: null,
  text: null,
  mod: 'desktop',
};
