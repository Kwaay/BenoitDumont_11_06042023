// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Star({ active }) {
  return (
    <li className="star">
      <i className={`fa-star ${active ? 'fa-solid' : 'fa-regular'} `}></i>
    </li>
  );
}

Star.propTypes = {
  active: PropTypes.bool.isRequired,
};
