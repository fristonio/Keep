import React, {Component} from 'react';

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
			this.props.searchNote(searchTerm);
		}
	}
}

export default Search;