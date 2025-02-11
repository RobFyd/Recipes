import { Article } from "../Article/Article";
import styles from "./Cookbook.module.css";

export function Cookbook({ heading, ...props }) {
  return (
    <main className={styles.main}>
      <h1>{heading}</h1>
      <Article {...props} />
    </main>
  );
}
