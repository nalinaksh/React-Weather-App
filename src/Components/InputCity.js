import React from 'react';

const InputCity = ({ onSubmitHandler, city, onInputHandler }) => {
    return (
      <div className="input">
        <input
          type="text"
          value={city}
          onChange={onInputHandler}
          placeholder="City..."
        />
        <br />
        <button className="input_btn" type="submit" onClick={onSubmitHandler}>
          Search
        </button>
      </div>
    );
  };

export default InputCity;