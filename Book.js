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

  deleteBook(index){
    const bookList = this.state.bookList;
    bookList.splice(index,1)
    this.setState({bookList:bookList});
  }


  render() {
    return (
      <div>
        <FormBook
          addBook={data => {
            this.bookStore(data);
          }}
        />
        {this.state.bookList.map((book,i) => {
          return (
            <div className="card">
              <img className="card-img-top" src={book.urlImage} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h5 className="card-title">{book.author}</h5>
                <p className="card-text">{book.description}</p>
                <button onClick={()=>this.deleteBook(i)} className="btn btn-primary">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
