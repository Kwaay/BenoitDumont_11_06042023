// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

export default function DropdownList({ dropdowns, direction }) {
  return (
    <ul
      className={`dropdown-container ${
        direction === 'row' ? 'row' : 'column'
      } `}
    >
      {dropdowns.map((dropdown) => (
        <Dropdown key={dropdown.title} {...dropdown} />
      ))}
    </ul>
  );
}
DropdownList.propTypes = {
  dropdowns: PropTypes.array.isRequired,
  direction: PropTypes.oneOf(['row', 'column']).isRequired,
};

DropdownList.defaultProps = {
  direction: 'column',
};
