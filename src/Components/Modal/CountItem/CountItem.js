import React from 'react';
import './CountItem.css';

export const CountItem = ({ count, setCount, onChange }) => {
  return (
    <div className="count-wrapper">
      <span>Количество</span>
      <div>
        <button disabled={count <= 1} onClick={() => setCount(count - 1)} className="button-count button-minus">
          -
        </button>
        <input type="number" min="1" max="50" value={count} className="count-input" onChange={onChange} />
        <button onClick={() => setCount(count + 1)} className="button-count button-plus">
          +
        </button>
      </div>
    </div>
  );
};
