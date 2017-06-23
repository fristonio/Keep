import React, {Component} from 'react';

require('./../../styles/card.css')


class noteCard extends Component {

	constructor() {
		super();
		this.state = {cardHead: ""};
	}

	componentDidMount() {
		this.addNote.addEventListener('keydown', this.addNotes.bind(this));
	}

	componentWillUnmount() {
		this.addNote.removeEventListener('keydown', function(){});
	}

	render() {
		let cardContent = this.props.notes;
		this.state.cardHead = Object.keys(cardContent)[0];
		cardContent = Object.values(cardContent)[0];
		let i = 0;
		cardContent = cardContent.map((elem, index) => {
			i++;
			return (
					<li key={i} onClick={this.checkToggle}>
						<i className="fa fa-square-o"></i>
						{elem}
					</li>
				);
		})

		return (
				<div className="cardContainer">
					<div className="cardBody">
						<div className="card-action">
							<i className="fa fa-archive" aria-hidden="true" onClick={this.archiveCard.bind(this)}></i>
							<i className="fa fa-close" aria-hidden="true" onClick={this.deleteCard.bind(this)}></i>
						</div>
						<li className="list-head" onClick={this.toggleList.bind(this)}>
							<i className="fa fa-minus"></i>
							<b>{this.state.cardHead}</b>
						</li>
						<ul className="listItems active" ref="listItems">
							{cardContent}
						</ul>
						<input type="text" className="input-todo" ref={elem => this.addNote = elem} placeholder="Add to list"/>
					</div>
				</div>
			);
	}


	// User defined functions
	addNotes(event) {
		if(event.keyCode === 13) {
			this.props.addNote(this.addNote.value, this.state.cardHead);
			this.addNote.value = '';
			this.forceUpdate();
		}
	}

	toggleList(event) {
		this.refs.listItems.classList.toggle('active');
		this.refs.listItems.classList.toggle('disable');
		event.currentTarget.firstChild.classList.toggle('fa-minus');
		event.currentTarget.firstChild.classList.toggle('fa-plus');
	}

	checkToggle(event) {
		event.currentTarget.firstChild.classList.toggle('fa-check-square-o');
		event.currentTarget.classList.toggle('checked');
		event.currentTarget.firstChild.classList.toggle('fa-square-o');
	}

	archiveCard(event) {
		this.props.archiveCard(this.state.cardHead)
	}

	deleteCard(event) {
		this.props.deleteCard(this.state.cardHead)
	}

}


export default noteCard;