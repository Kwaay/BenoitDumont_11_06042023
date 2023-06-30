// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Star from './Star';

export default function StarsList({ rating }) {
  return (
    <ul className="star-container">
      {Array.from(Array(5).keys()).map((star) => (
        <Star key={star} active={star <= rating} />
      ))}
    </ul>
  );
}
StarsList.propTypes = {
  rating: PropTypes.number.isRequired,
};
