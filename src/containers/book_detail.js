import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

	render() {

		console.log('this.props =', this.props)

		// on first render
		if (!this.props.book){
			return (
				<div>
					Select a book to get started.
				</div>
			)
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.book.title}</div>
			</div>
		);
	}
}

// argument is application state
// returns props for this container BookDetail
function mapStateToProps(state) {

	console.log('BookDetail state', state);

	return {
		book: state.activeBook
	}
}

// export container
export default connect(mapStateToProps)(BookDetail);