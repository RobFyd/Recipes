import { Article } from "../Article/Article";
import styles from "./Cookbook.module.css";

export function Cookbook({ name, ingredients, description, img }) {
    return (
        <main className={styles.main}>
            <h1>Przepisy na smaczne rzeczy</h1>
            <Article
                name={name}
                ingredients={ingredients}
                description={description}
                img={img}
            />
        </main>
    );
}
