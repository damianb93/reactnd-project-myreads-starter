import React from 'react';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import SearchBooks from "./bookcase/Search-books";
import Bookcase from "./bookcase/Bookcase";
import {Route} from "react-router-dom";

class BooksApp extends React.Component {

  state = {
    books: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  /**
   * Updates API database and class state books property
   * @param book - Book object that's being updated
   * @param shelf - updated value of shelf property
   */
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState({
          books: this.state.books
            .filter(b => b.id !== book.id) // Remove outdated book position from books
            .concat([Object.assign(book, {shelf})]) // Add updated book position to books
        })
      })
      .catch(error => Error(error));
  };

  /**
   * Sets array of book objects fetched from external API
   * as books property in class state.
   */
  getBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({books});
      })
      .catch(error => Error(error));
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookcase
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
        <Route exact path="/search" render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
