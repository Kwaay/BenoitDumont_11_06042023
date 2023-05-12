// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Dropdown({
  title,
  content,
  openedByDefault = false,
  textFontSize,
}) {
  const [isOpen, setIsOpen] = useState(openedByDefault);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <li className={`dropdown ${isOpen ? 'open' : ''} `}>
      <h1 className="dropdown-title" style={{ fontSize: textFontSize }}>
        <span>{title}</span>
        <i className="fas fa-chevron-down dropdown-toggle" onClick={toggle}></i>
      </h1>

      {isOpen && (
        <p className="dropdown-content" style={{ fontSize: textFontSize }}>
          {content}
        </p>
      )}
    </li>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  openedByDefault: PropTypes.bool.isRequired,
  textFontSize: PropTypes.number.isRequired,
};
Dropdown.defaultProps = {
  title: null,
  content: null,
  openedByDefault: false,
  textFontSize: 0,
};
