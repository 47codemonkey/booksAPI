import React from "react";
import styles from "./BooksList.module.css";

const BooksList = ({ items }) => (
  <ul className={styles.BooksGallery}>
    {items.map(({ best_book }) => (
      <li className={styles.ImageBooksGallery} key={best_book.id._text}>
        <p className={styles.AuthorInfo}>
          Author: {best_book.author.name._text}
        </p>
        <p className={styles.TitleInfo}>Title: {best_book.title._text}</p>
        <img
          className={styles.ImageBooksGalleryItem}
          src={best_book.image_url._text}
          alt="img"
        />
      </li>
    ))}
  </ul>
);

export default BooksList;
