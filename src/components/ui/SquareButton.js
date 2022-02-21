import React from 'react';
import PropTypes from 'prop-types';

const SquareButton = ({ title, onClick, type }) => {
  return (
    
    <button
        className='squareButton'
        type={type}
        onClick={onClick}
    >
        <span>
            { title.toUpperCase() }
        </span>
    </button>
  )
}

SquareButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

SquareButton.defaultProps = {
  title: "Set title of button",
  type: "button",
  onClick: () => {},
}
export default SquareButton;
