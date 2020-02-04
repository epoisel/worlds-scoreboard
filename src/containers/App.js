import React, { Component } from 'react';
import Scoreboard from '../components/Scoreboard';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			teams: [],
		}
	}

	componentDidMount() {
		fetch('https://swapi.co/api/')
		.then(response=> response.json())
		.then(users=> this.setState({ teams: /teams/}));
		}

	render() {
		const { teams,} = this.state;
		const filteredTeams = teams.filter(team => {
			return team.name.toLowerCase()
		})
		return !teams.length ?
		<h1>Loading...</h1> :
			(
			<div className='tc'>
				<h1 className='f2'>Worlds Scoreboard</h1>
        <Scoreboard/>
				<Scroll>
				<Cardlist teams={filteredTeams}/>
				</Scroll>
			</div>
			); 
		}
	

}

export default App;


