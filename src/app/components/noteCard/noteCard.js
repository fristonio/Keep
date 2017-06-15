import React, {Component} from 'react';

require('./../../styles/card.css')

class noteCard extends Component {
	render() {
		return (
				<div className="card">
					<ul className="listItems">
						<li>List content 1</li>
						<li>List content 2</li>
						<li>{this.props.props}</li>
						<li>{this.props.props}</li>
						<li>{this.props.props}</li>
						<li>{this.props.props}</li>
						<li>{this.props.props}</li>
						<li>{this.props.props}</li>
					</ul>
				</div>
			);
	}
}

export default noteCard;