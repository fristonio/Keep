import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../../actions/notesAction';


require('./../../../styles/card.css')


class Card extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.addNote.addEventListener('keydown', this.addNotes.bind(this));
    }

    componentWillUnmount() {
        this.addNote.removeEventListener('keydown', function(){});
    }

    render() {
        let cardContent = this.props.card.notes;
        let i = 0;
        cardContent = cardContent.map((elem, index) => {
            i++;
            return (
                    <li key={i} onClick={this.checkToggle}>
                        <i className={elem.completed ? "fa fa-check-square-o" : "fa fa-square-o"}></i>
                        {elem.note}
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
                            <b>{this.props.card.cardHead}</b>
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
            let note = this.addNote.value;
            if(note) {
                let exist = this.props.card.notes.find(elem => {
                    if(note == elem.note)
                        return true;
                });
                if(!exist) {
                    this.props.createNewNote(this.props.card.cardHead, note);
                }
                else
                    alert("The note you are adding already exist in the same card")
                this.addNote.value = '';
            }
        }
    }

    toggleList(event) {
        this.refs.listItems.classList.toggle('active');
        this.refs.listItems.classList.toggle('disable');
        event.currentTarget.firstChild.classList.toggle('fa-minus');
        event.currentTarget.firstChild.classList.toggle('fa-plus');
    }

    archiveCard(event) {
        this.props.archiveCard(this.props.card.cardHead)
    }

    deleteCard(event) {
        this.props.deleteCard(this.props.card.cardHead)
    }

}


const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNewNote: (cardHead, note) => dispatch(actions.createNewNote(cardHead, note)),
        archiveCard: (cardHead) => dispatch(actions.archiveCard(cardHead)),
        deleteCard: (cardHead) => dispatch(actions.deleteCard(cardHead))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
