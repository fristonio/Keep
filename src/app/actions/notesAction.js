export function showAll() {
	return {
		type: 'SHOW_ALL'
	}
}

export function showSearchResults(searchTerm) {
	return {
		type: 'SHOW_SEARCH_RESULTS',
		searchTerm: searchTerm
	}
}

export function createNewCard(cardHead) {
	return {
		type: 'CREATE_CARD',
		cardHead: cardHead
	}
}

export function createNewNote(cardHead, note) {
	return {
		type: 'CREATE_NEW_NOTE',
		cardHead: cardHead,
		note: note
	}
}

export function archiveNote() {

}

export function deleteNote() {

}