import React from 'react';

const Card = ({ logo, name, score }) => {
	return (
		<div className='card-background op'>
		<img alt='logo' src={``} />
		<div>
			<h2>{name}</h2>
			<p>{score}</p>
		</div>
		</div>
	);
}


export default Card;