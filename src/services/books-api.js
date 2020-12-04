import axios from "axios";

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=XoEz7qzzdrsmHJD1qyHWxw&q=";

export const fetchBooks = (searchTerm) => axios.get(BASE_URL + searchTerm);
