import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export default function Thumb({ id, cover, title }) {
  return (
    <Link className="thumb" to={`/logement/${id}`}>
      <img src={cover} alt={title}></img>
      <p className="thumb-title">{title}</p>
    </Link>
  );
}
Thumb.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
