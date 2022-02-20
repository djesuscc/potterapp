import React from 'react';

export const SquareButton = ({ title, onClick }) => {
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
