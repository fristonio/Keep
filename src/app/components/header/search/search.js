import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from './../../../actions/notesAction';

class Search extends Component {

	render() {
		return (
			<div id="searchBar">
				<input type="text" className="searchInput" placeholder="Search..." onKeyDown={this.searchNote.bind(this)}/>
				<i className="fa fa-search"></i>
			</div>
		);
	}

	searchNote(event) {
		if(event.keyCode === 13) {
			let searchTerm = event.currentTarget.value;
			this.props.showSearched(searchTerm);
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {
		showSearched: (searchTerm) => dispatch(actions.showSearched(searchTerm))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);