import React, {Component} from 'react';
import Header from './header/header.js';
import Card from './noteCard/noteCard.js';

require('./../styles/main.css')


class Home extends Component {
	render() {
		return(
				<div>
					<Header />
					<div id="main-body">
						<Card />
						<Card props="thisis it"/>
						<Card />
						<Card/>
					</div>
				</div>
			);
	}
}

export default Home;