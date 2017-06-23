import React, {Component} from 'react';
import Search from './search/search';


require('./../../styles/header.css')


class Header extends Component {

	render() {
		return(
			<div className="Header">
				<div className="appName">
					<i className="fa fa-bars"></i>
					<h1 onClick={this.props.showAllNotes}>Note-It </h1>
				</div>
				<Search searchNote={this.props.searchNote}/>
			</div>
			);
	}

}

export default Header;