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
						notes: new Array(), // Will contain all notes
						displayedNotes: new Array() // Currently displayed notes
					};
	}

	render() {
		let notes = this.state.displayedNotes;
		let i = 0;
		notes = notes.map((elem, index) => {
			i++;
			return(
					<Card key={i} notes={elem} addNote={this.addNote.bind(this)}/>
				);
		});

		// Rendering HTML
		return(
				<div>
					<Header searchNote={this.searchNote.bind(this)} showAllNotes={this.showAllNotes.bind(this)}/>
					<Createnote createNewNote={this.createNewNote.bind(this)}/>
					<div id="main-body">
						{notes}
					</div>
				</div>
			);
	}

	// User defined functions :

	showAllNotes() {
		this.state.displayedNotes = this.state.notes;
		this.forceUpdate();
	}

	// create a New note card using the note header
	createNewNote(name) {
		if(name) {
			let exist = this.state.notes.find(elem => {
				if (Object.keys(elem)[0] == name)
					return true
			});
			if(!exist) {
				let obj = {};
				obj[name] = new Array();
				this.state.notes.push(obj);
				this.state.displayedNotes = this.state.notes;
				this.forceUpdate();
			}
			else
				alert('Duplicate Note It already exists, try to create a new one with different name');
		}

	}

	// Create a new Note under a particular card
	addNote(note, noteHead) {
		if(note) {
			this.state.notes.map(obj => {
				if(Object.keys(obj)[0] == noteHead) {
					if(obj[noteHead].indexOf(note) == -1) {
						obj[noteHead].push(note);
					}
					else
						alert("Note already exist in this card")
				}
			});
			this.state.displayedNotes = this.state.notes;
		}
	}

	// Search the note
	searchNote(searchTerm) {
		// Search for searchTerm in the note headings.
		let cardsFound = []
		this.state.notes.map(obj => {
			let noteHead = Object.keys(obj)[0];
			// Select the head as a match if the term entered matches complete heading or a part of it
			if(noteHead.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
				cardsFound.push(noteHead);
		});

		// Search for the notes in notes
		let notesFound = []
		this.state.notes.map(obj => {
			Object.values(obj)[0].map(note => {
				if(note.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
					let noteObj = {}
					noteObj[Object.keys(obj)[0]] = note;
					notesFound.push(noteObj)
				}
			});
		});

		let foundNotesHeadinArr= []
		notesFound.map(obj => {
			foundNotesHeadinArr.push(Object.keys(obj)[0]);
		})


		this.state.displayedNotes = this.state.notes.filter(obj => {
			return ((cardsFound.indexOf(Object.keys(obj)[0]) > -1) || (foundNotesHeadinArr.indexOf(Object.keys(obj)[0]) > -1))
		});
		this.forceUpdate();
	}

}

export default Home;