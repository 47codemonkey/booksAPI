import React from "react";
import styles from "./Error.module.css";

export default function ErrorNotification({ text }) {
  return <h1 className={styles.Error}>Ooops, something went wrong: {text}</h1>;
}
