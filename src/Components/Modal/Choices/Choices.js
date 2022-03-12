import React from 'react';

export const Choices = ({openItem,choice,changeChoices}) => {
	return (
		<div>
			<h3>Выбирайте:</h3>
			<div className="choice-wrapper">
      {openItem.choices.map((item, i) => (
        <label key={i} className="choice-label">
          <input type="radio" name='choices' value={item} checked={choice === item} onChange={(e)=>changeChoices(e)} />
          {item}
        </label>
      ))}
    </div>
		</div>
	);
}
