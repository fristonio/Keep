import React, {Component} from 'react';

require('./../../styles/createnote.css')

class Createnote extends Component {

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
		if(event.keyCode === 13)
			this.props.addNewNote(this.createNote.value)
	}

}

export default Createnote;