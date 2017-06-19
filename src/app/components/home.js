import React, {Component} from 'react';
import Header from './header/header.js';
import Card from './noteCard/noteCard.js';
import Createnote from './createNote/createNote.js';

require('./../styles/main.css')


class Home extends Component {
	constructor() {
		// Super method must be invoked in order to use this inside the constructor()
		super();
		// Setting the initial state of Component
		this.state = {
						notes: new Array()
					};
	}

	render() {
		return(
				<div>
					<Header />
					<div id="main-body">
						<Createnote addNewNote={this.addNewNote.bind(this)}/>
					</div>
				</div>
			);
	}

	// User defined functions :
	addNewNote(name) {
		let obj = {};
		obj[name] = new Array();
		this.state.notes.push(obj);
	}
}

export default Home;