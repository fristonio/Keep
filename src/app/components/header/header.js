import React, {Component} from 'react';
import Search from './search/search';


require('./../../styles/header.css')


class Header extends Component {
	render() {
		return(
			<div className="Header">
				<h1> Keep </h1>
				<Search />
			</div>
			);
	}
}

export default Header;