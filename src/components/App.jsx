import React, { Component } from "react";
import BooksList from "./BooksList/BooksList";
import Loader from "./Loader/Loader";
import ErrorNotification from "./ErrorNotification/ErrorNotification";
import SearchForm from "./SearchForm/SearchFrom";
import * as booksAPI from "../services/books-api";

const convert = require("xml-js");

export default class App extends Component {
  state = {
    books: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = (searchTerm) => {
    this.setState({ isLoading: true });

    booksAPI
      .fetchBooks(searchTerm)
      .then((res) => {
        const data = JSON.parse(
          convert.xml2json(res.data, { compact: true, spaces: 2 })
        );
        this.setState({
          books: data.GoodreadsResponse.search.results.work,
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { books, isLoading, error } = this.state;
    return (
      <div>
        <SearchForm onSubmit={this.fetchBooks} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {books && books.length > 0 && <BooksList items={books} />}
      </div>
    );
  }
}
