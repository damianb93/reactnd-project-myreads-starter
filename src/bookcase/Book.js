import React, {Component} from 'react';

class Book extends Component {
  options = [
    {value: 'move', label: 'Move to...', disabled: true},
    {value: 'currentlyReading', label: 'Currently Reading'},
    {value: 'wantToRead', label: 'Want to Read'},
    {value: 'read', label: 'Read'},
    {value: 'none', label: 'None'}
  ];

  state = {
    selectedOptionValue: this.props.book.shelf
  };

  handleChange = (event) => {
    const selectedOptionValue = event.target.value;

    this.setState({selectedOptionValue});
    this.props.changeShelf(this.props.book, selectedOptionValue);
  };

  render() {
    const book = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
               style={{width: 135, height: 200, backgroundImage: `url(${book.imageLinks.thumbnail})`}}/>

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
