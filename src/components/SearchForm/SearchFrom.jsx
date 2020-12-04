import React, { Component } from "react";
import styles from "./SearchForm.module.css";

export default class SearchForm extends Component {
  state = {
    searchTerm: "",
    searchTimeout: 0,
  };

  handleChange = (e) => {
    const term = e.target.value;
    this.setState({
      searchTerm: term,
    });
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = 0;
    }
    this.searchTimeout = setTimeout(() => {
      this.props.onSubmit(term);
    }, 500);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
    this.setState({
      searchTerm: "",
    });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={styles.SearchFormInput}
            type="text"
            value={searchTerm}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
