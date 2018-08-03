import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from "./Bookshelf";

class Bookcase extends Component {

  render() {
    const bookcase = [
      {
        title: 'Currently Reading',
        type: 'currentlyReading'
      },
      {
        title: 'Want to Read',
        type: 'wantToRead'
      },
      {
        title: 'Read',
        type: 'read'
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookcase.map(shelf => (
            <Bookshelf
              key={shelf.title}
              title={shelf.title}
              books={this.props.books.filter(book => book.shelf === shelf.type)}
              changeShelf={this.props.changeShelf}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Bookcase;