import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Book from "./Book";
import {DebounceInput} from "react-debounce-input";

class SearchBooks extends Component {
  state = {
    query: this.props.query
  };

  updateQuery = (query) => {
    this.setState({query});
    this.props.search(query);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              placeholder="Search by title or author"
              debounceTimeout={500}
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>

          <a onClick={() => this.updateQuery('')} className="clear-search">Clear</a>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchResult && this.props.searchResult.length > 0 ? (
              this.props.searchResult.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    changeShelf={this.props.changeShelf}
                  />
                </li>
              ))
            ) : (
              this.props.searchResult.length === 0 && (
                <div>
                  <h1>No matching results found</h1>
                </div>
              )
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;