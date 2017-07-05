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
					if(card.cardHead === action.cardHead) {
						return Object.assign({}, card, {
							notes: [
								...card.notes,
								{
									cardHead: action.cardHead,
									completed: false,
									note: action.note
								}
							]
						});
					}
					return Object.assign({}, card);
				})
			})


		case 'DELETE_CARD':
			return Object.assign({}, {
				notes: [
					...state.notes.filter((card) => {
						return action.cardHead != card.cardHead;
					})
				],
				show: 'ACTIVE',
				searchTerm: ''
			});


		case 'ARCHIVE_CARD':
			return Object.assign({}, state, {
				notes: [
					...state.notes.map((card) => {
						if(card.cardHead === action.cardHead){
							return Object.assign({}, card, {
								archived: true
							});
						}
						else
							return Object.assign({}, card)
					})
				]
			})


		case 'SHOW_ACTIVE':
			return Object.assign({}, state, {
				show: 'ACTIVE',
				searchTerm: ''
			})


		case 'SHOW_ARCHIVED':
			return Object.assign({}, state, {
				show: 'ARCHIVED',
				searchTerm: ''
			})


		case 'SHOW_SEARCHED':
			return Object.assign({}, state, {
				show: 'SEARCHED',
				searchTerm: action.searchTerm
			})
	}
	return state;

}
