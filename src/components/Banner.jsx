// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Banner({ img, text }) {
  if (text !== undefined) {
    return (
      <div className="banner">
        <img src={img} alt={img}></img>
        <p>
          {text.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </p>
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
  text: PropTypes.array,
};
Banner.defaultProps = {
  img: null,
  text: null,
};
