import React, { Component } from "react";

export default class FormBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImage: "",
      title: "",
      author: "",
      description: ""
    };
  }
  onInputurlImage(event) {
    this.setState({ urlImage: event.target.value });
  }
  onInputTitle(event) {
    this.setState({ title: event.target.value });
  }
  onInputAuthor(event) {
    this.setState({ author: event.target.value });
  }
  onInputDescription(event) {
    this.setState({ description: event.target.value });
  }
  onSummit() {
    const { urlImage, title, author, description } = this.state;
    if(!urlImage || !title || !author || !description)return
    this.props.addBook({ urlImage, title, author, description });
    this.setState({ urlImage: "", title: "", author: "", description: "" });
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="exampleInputURLimage1">URLimage</label>
            <input
              onChange={e => this.onInputurlImage(e)}
              value={this.state.urlImage}
              className="form-control"
              id="exampleInputURLimage1"
              placeholder="Enter URLimage"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputTitle1">Title</label>
            <input
              onChange={e => this.onInputTitle(e)}
              value={this.state.title}
              className="form-control"
              id="exampleInputTitle1"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputAuthor1">Author</label>
            <input
              onChange={e => this.onInputAuthor(e)}
              value={this.state.author}
              className="form-control"
              id="exampleInputAuthor1"
              placeholder="Author"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputDescription1">Description</label>
            <input
              onChange={e => this.onInputDescription(e)}
              value={this.state.description}
              className="form-control"
              id="exampleInputDescription1"
              placeholder="Enter Description"
            />
          </div>
          <button
            type="button"
            onClick={() => this.onSummit()}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
