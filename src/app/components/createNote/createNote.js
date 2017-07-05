import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/notesAction';

require('./../../styles/createnote.css')


class Createnote extends Component {
    // Binding an event listner to DOM element
    componentDidMount() {
        this.createNote.addEventListener('keydown', this.createCard.bind(this));
    }

    componentWillUnmount() {
        this.createNote.removeEventListener('keydown');
    }


    render() {
        return (
            <div id="create-note-form">
                <input type="text" placeholder="Meetings @today ..." ref={inputNote => this.createNote = inputNote}/>
            </div>
        );
    }


    createCard(event) {
        if(event.keyCode === 13) {
            let cardHead = this.createNote.value;
            if(cardHead) {
                this.createNote.value = '';
                let exist = this.props.notes.find(elem => {
                    if(elem.cardHead === cardHead)
                        return true;
                });
                if(!exist) {
                    this.props.createNewCard(cardHead);
                }
                else
                    alert('Duplicate Note It already exists, try to create a new one with different name');
            }
        }
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        notes: state.notes.notes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNewCard: (cardHead) => dispatch(actions.createNewCard(cardHead))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Createnote);
