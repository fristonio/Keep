import initialState from "./initialState";

export default function notesReducer(state = initialState, action) {

	switch(action.type) {

		case 'CREATE_CARD':
			return Object.assign({}, state, {
				notes: [
					...state.notes,
					{
						cardHead: action.cardHead,
						archived: false,
						notes: new Array()
					}
				]
			})

		case 'CREATE_NEW_NOTE':
			return Object.assign({}, state, {
				notes: state.notes.map((card, index) => {
					if(card[cardHead] === action.cardHead) {
						return Object.assign({}, card, {
							notes: [
								...card.notes,
								{
									cardHead: action.cardHead,
									completed: false,
									note: action.note
								}
							]
						})
					}
				})
			})

		case 'SHOW_SEARCH_RESULTS':
			return state

		case 'SHOW_ACTIVE':
			return Object.assign({}, state, {
				notes: state.notes.filter((card, index) => {
					return card.archived === false;
				})
			})

		case 'ARCHIVE_CARD':
			return state

		case 'DLETE_CARD':
			return state

		case 'SHOW_ALL':
			return state;
	}
	return state;

}
