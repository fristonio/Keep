import React, {Component} from 'react';

require('./../../styles/card.css')

class noteCard extends Component {
	render() {
		return (
				<div className="cardContainer">
					<div className="cardBody">
						<li className="list-head"><i className="fa fa-plus"></i><b>Card - Heading</b></li>
						<ul className="listItems">
							<li>List content 1</li>
						</ul>
						<input type="text" className="input-todo"/>
					</div>
				</div>
			);
	}
}

export default noteCard;