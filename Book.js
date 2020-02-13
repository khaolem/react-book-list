import React, { Component } from "react";
import FormBook from "./FormBook";
export default class Book extends Component {
  constructor() {
    super();
    this.state = {
      bookList: []
    };
  }

  bookStore(data) {
    const bookList = this.state.bookList;
    bookList.push(data);
    console.log("In", data);
    this.setState({ bookList: bookList });
    console.log("Insite", bookList);
  }

  deleteBook(index) {
    const bookList = this.state.bookList;
    bookList.splice(index, 1);
    this.setState({ bookList: bookList });
  }

  render() {
    return (
      <div className="container">
        <FormBook
          addBook={data => {
            this.bookStore(data);
          }}
        />
        {this.state.bookList.map((book, i) => {
          return (
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src={book.urlImage}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{book.author}</small>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.deleteBook(i);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            // <div className="card">
            //   <img className="card-img-top" src={book.urlImage} />
            //   <div className="card-body">
            //     <h5 className="card-title">{book.title}</h5>
            //     <h6 className="card-title">{book.author}</h6>
            //     <p className="card-text">{book.description}</p>
            //     <button onClick={()=>this.deleteBook(i)} className="btn btn-danger">
            //       Delete
            //     </button>
            //   </div>
            // </div>
          );
        })}
      </div>
    );
  }
}
