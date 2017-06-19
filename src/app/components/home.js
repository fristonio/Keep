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
		let notes = this.state.notes;
		let i = 0;
		notes = notes.map((elem, index) => {
			i++;
			return(
					<Card key={i} notes={elem} addNote={this.addNote.bind(this)}/>
				);
		});

		return(
				<div>
					<Header />
					<Createnote createNewNote={this.createNewNote.bind(this)}/>
					<div id="main-body">
						{notes}
					</div>
				</div>
			);
	}

	// User defined functions :

	createNewNote(name) {
		if(name) {
			let obj = {};
			obj[name] = new Array();
			this.state.notes.push(obj);
			this.forceUpdate();
		}
	}

	addNote(note, noteHead) {
		if(note) {
			this.state.notes.map(obj => {
				if(Object.keys(obj)[0] == noteHead)
					obj[noteHead].push(note);
			});
		}
	}

}

export default Home;