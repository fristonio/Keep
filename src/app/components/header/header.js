import React, {Component} from 'react';
import { connect } from 'react-redux';

import Search from './search/search';
import * as actions from './../../actions/notesAction';

require('./../../styles/header.css')


class Header extends Component {

	render() {
		return(
			<div className="Header">
				<div className="appName">
					<i className="fa fa-bars"></i>
					<h1 onClick={this.props.showActive}>Note-It </h1>
				</div>
				<Search/>
			</div>
			);
	}

}

const mapStateToProps = (state, ownProps) => {
	return {}
};

const mapDispatchToProps = (dispatch) => {
	return {
		showActive: () => dispatch(actions.showActive())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);