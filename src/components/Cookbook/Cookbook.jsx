import { Article } from "../Article/Article";
import styles from "./Cookbook.module.css";

export function Cookbook(props) {
  return (
    <main className={styles.main}>
      <h1>Przepisy na smaczne rzeczy</h1>
      <Article {...props} />
    </main>
  );
}
