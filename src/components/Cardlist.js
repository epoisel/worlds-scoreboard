import React from 'react';
import Card from './Card';


const CardList = ({ teams }) => {
	
	return(
		<div>
			{teams.map((team, i) => {
		return (
		<Card key={i} 
		id={teams[i].id} 
		name={teams[i].name} 
		score={teams[i].score}
		/>
		);
	})}
		</div>
	);
}

export default CardList;