import React, { Component } from 'react';
// React-Redux is the glue between the React and Redux libraries
import { connect } from 'react-redux';

class BookList extends Component {

	// need to combine Redux state to this React component
	// will use a separate library called React/Redux (part of core React)
	// will promote a component to container
	// a container is a special or "smart" component with a direct connection
	// to redux state

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key = {book.title} className = "list-group-item">
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

// the connect function takes a function and a component 
// and produces a container.
export default connect(mapStateToProps)(BookList);