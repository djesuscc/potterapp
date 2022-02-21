import React from 'react';
import PropTypes from 'prop-types';

const StyledInputs = ({ labelName, type, value, onChange, name }) => {
  return (
    <div className='form-group'>
        <label htmlFor={name}>
            { labelName.toUpperCase() }
        </label>
        <input
            id={name}
            name={name}
            type={type}
            className="form-input"
            autoComplete='off'
            value={value}
            onChange={onChange}
            required
        />
    </div>
  )
}

StyledInputs.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  labelName: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
}

StyledInputs.defaultProps = {
  name: "",
  value: "",
  labelName: "",
  type: "text",
  onchange: () => {},
}

export default StyledInputs;