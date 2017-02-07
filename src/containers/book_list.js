import React, { Component } from 'react';

// React-Redux is the glue between the React and Redux libraries
import { connect } from 'react-redux';

// import action creator selectBook
import { selectBook } from '../actions/index';

// import bindActionCreators from Redux
// this function ensures that the action created by the action creator
// flows through all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {

	// need to combine Redux state to this React component
	// will use a separate library called React/Redux (part of core React)
	// will promote a component to container
	// a container is a special or "smart" component with a direct connection
	// to redux state

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key = {book.title}
					onClick = {() => this.props.selectBook(book)}
					className = "list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className = "list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// purpose: take application 'state' as an argument
// and whatever return from this function will show up as 'props'
// inside of this component BookList

// if our state ever changes, this BookList component will re-render
// and the books property will update
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props on the
// BookList container.
// Then within BookList, we can call this.props.selectBook, which will call
// our action creator
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be dispatched
	// to all reducers
	return bindActionCreators({ selectBook:selectBook }, dispatch);
}

// Promote BookList from a component to a container.
// the connect function takes a function and a component 
// and produces a container.

// Also needs to know about the new dispatch method.  Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);