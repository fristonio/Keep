import React, { Component } from 'react';
import { connect } from 'react-redux';


import Header from './header/header.js';
import Notes from './notes/notes.js';
import Createnote from './createNote/createNote.js';
import * as actions from './../actions/notesAction';


require('./../styles/main.css')

class Home extends Component {

	render() {
		return(
				<div>
					<Header/>
					<Createnote/>
					<Notes/>
				</div>
			);
	}

}


const mapStateToProps = (state, ownProps) => {
	// Now we can use this.props.notes 
	return {
 		notes: state.notes
 	}
};

const mapDispatchToProps = (dispatch) => {
	// Now we can use this.props.createNewNote
	return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
