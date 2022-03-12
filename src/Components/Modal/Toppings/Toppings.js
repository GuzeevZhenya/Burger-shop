import React from 'react';
import './Toppings.css';

export const Toppings = ({ toppings, checkToppings }) => {
  return (
    <div className="topping-wrapper">
      {toppings.map((item, i) => (
        <label key={i} htmlFor="" className="topping-label">
          <input type="checkbox" />
          {item.name}
        </label>
      ))}
    </div>
  );
};
