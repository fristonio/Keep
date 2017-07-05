import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './noteCard/noteCard.js';

require('./../../styles/main.css');


class Notes extends Component {

    render() {
        let Cards = this.getCards();
        return (
            <div id="main-body">
                {Cards}
            </div>
        )
    }


    getCards() {
        let notes = this.props.notes;
        if(notes.length > 0) {
            let i = 0;
            let cards;
            switch(this.props.show) {
                case 'ACTIVE':
                    cards = notes.map((card, index) => {
                        if(!card.archived) {
                            i++;
                            return(<Card key={i} card={card} />)
                        }
                    });
                    break;
                case 'ARCHIVED':
                    cards = notes.map((card, index) => {
                        if(card.archived) {
                            i++;
                            return(<Card key={i} card={card} />)
                        }
                    });
                    break;
                case 'SEARCHED':
                    cards = this.getSearchedCards()
                    break;
            }
            return cards;
        }
        else 
            return (
                <h1>Add notes to get started</h1>
            );
    }

    getSearchedCards() {
        let searchTerm = this.props.searchTerm;
        let searchResult = this.props.notes.filter((card) => {
            if(card.cardHead.indexOf(searchTerm) != -1)
                return true;
            return card.notes.find((elem) => {
                if(elem.note.indexOf(searchTerm) != -1)
                    return true;
            })
        });
        let i = 0;
        return searchResult.map((card) => {
            i++;
            return(<Card key={i} card={card} />)
        });
    }

}


function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes.notes,
        show: state.notes.show,
        searchTerm: state.notes.searchTerm
    }
};

export default connect(mapStateToProps)(Notes);
