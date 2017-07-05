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

export function showActive() {
    return {
        type: 'SHOW_ACTIVE'
    }
}

export function showArchived() {
    return {
        type: 'SHOW_ARCHIVED'
    }
}

export function showSearched(searchTerm) {
    return {
        type: 'SHOW_SEARCHED',
        searchTerm: searchTerm
    }
}
