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

export function archiveCard(cardHead) {
	return {
		type: 'ARCHIVE_CARD',
		cardHead: cardHead
	}
}

export function deleteCard(cardHead) {
	return {
		type: 'DELETE_CARD',
		cardHead: cardHead
	}
}