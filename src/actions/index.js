// February 6, 2017

// Create an action creator called selectBook()
// Need to make sure action creator is wired up to Redux
export function selectBook (book) {
	// console.log('A book has been selected:', book.title);
	
	// selectBook is an action creator, it needs to return an action.
	// An action is an object with two properties:
	// 1. type - purpose of action (required)
	// 2. payload - further describes the conditions of the action being triggered

	// will usually pull all types out to a separate file
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}
