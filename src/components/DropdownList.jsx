// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

export default function DropdownList({ dropdowns }) {
  return (
    <ul className="dropdown-container">
      {dropdowns.map((dropdown) => (
        <Dropdown key={dropdown.title} {...dropdown} />
      ))}
    </ul>
  );
}
DropdownList.propTypes = {
  dropdowns: PropTypes.array.isRequired,
};
