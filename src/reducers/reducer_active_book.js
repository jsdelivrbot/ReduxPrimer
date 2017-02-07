
// the initial state will be null (i.e., when page initially loads)
export default function (state = null, action) {

	switch (action.type) {

		case 'BOOK_SELECTED':
			// return selected book
			console.log('action.payload =', action.payload);
			return action.payload;

	}

	// default case - no change in state
	return state;
}