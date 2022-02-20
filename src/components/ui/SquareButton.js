import React from 'react';
import PropTypes from 'prop-types';

const SquareButton = ({ title, onClick }) => {
  return (
    
    <button
        className='squareButton'
        type='button'
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
  onClick: PropTypes.func,
}

SquareButton.defaultProps = {
  title: "Set Name of Button",
  onClick: () => {},
}
export default SquareButton;
