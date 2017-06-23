import React, {Component} from 'react';

require('./../../styles/createnote.css')


class Createnote extends Component {
	// Binding an event listner to DOM element
	componentDidMount() {
		this.createNote.addEventListener('keydown', this.handlekeypress.bind(this));
	}


	componentWillUnmount() {
		this.createNote.removeEventListener('keydown');
	}


	render() {
		return (
			<div id="create-note-form">
				<input type="text" placeholder="Meetings @today ..." ref={inputNote => this.createNote = inputNote}/>
			</div>
		);
	}


	handlekeypress(event) {
		// On pressing Enter in the input box
		if(event.keyCode === 13) {
			this.props.createNewNote(this.createNote.value);
			this.createNote.value = '';
		}
	}

}

export default Createnote;