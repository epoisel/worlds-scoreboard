import React from 'react';

const Scoreboard = ({ logo, name, score }) => {
	return (
		<div className='scoreboard op'>
		<img alt='logo' src={``} />
		<div>
			<h2>{name}</h2>
			<p>{score}</p>
            <p>{timer}</p>
            <p>{gold}</p>
            <p>{towers}</p>
		</div>
		</div>
	);
}