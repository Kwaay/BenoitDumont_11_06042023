// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Tag({ title }) {
  return (
    <li className="tag">
      <span>{title}</span>
    </li>
  );
}

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};
Tag.defaultProps = {};
