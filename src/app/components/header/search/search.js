import React, {Component} from 'react';

class Search extends Component {
	render() {
		return (
			<div id="searchBar">
				<input type="text" className="searchInput" placeholder="Search..."/>
				<i className="fa fa-search"></i>
			</div>
		);
	}
}

export default Search;