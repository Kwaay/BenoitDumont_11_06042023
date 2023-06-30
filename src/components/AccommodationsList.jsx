// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Thumb from './Thumb';

export default function AccommodationList({ accommodations }) {
  return (
    <div className="thumb-container">
      {accommodations.map((accommodation) => (
        <Thumb key={accommodation.id} {...accommodation} />
      ))}
    </div>
  );
}
AccommodationList.propTypes = {
  accommodations: PropTypes.array.isRequired,
};
