import React, {Component} from 'react';
import Search from './search/search';


require('./../../styles/header.css')


class Header extends Component {
	render() {
		return(
			<div className="Header">
				<div className="appName">
					<i className="fa fa-bars"></i>
					<h1>Note-It </h1>
				</div>
				<Search />
			</div>
			);
	}
}

export default Header;