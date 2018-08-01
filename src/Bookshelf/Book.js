import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  options = [
    { value: 'move', label: 'Move to...', disabled: true},
    { value: 'currentlyReading', label: 'Currently Reading' },
    { value: 'wantToRead', label: 'Want to Read' },
    { value: 'read', label: 'Read' },
    { value: 'none', label: 'None' }
  ]

  state = {
    selectedOptionValue: this.props.book.shelf,
  }

  handleChange = (event) => {
    this.setState({ selectedOptionValue: event.target.value })
  }

  render() {
    const book = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.selectedOptionValue} onChange={this.handleChange}>
              {this.options.map(option => (
                <option
                  key={book.id + option.value}
                  value={option.value}
                  label={this.state.selectedOptionValue === option.value ? `✔ ${option.label}` : option.label}
                  disabled={option.disabled}>
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map((author, index) => (
            <span key={author}>{author}{index !== book.authors.length - 1 && (<span>,</span>)} </span>
          ))}
        </div>
      </div>
    )
  }
}

export default Book;
