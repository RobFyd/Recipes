import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";

export function Article({ name, ingredients, description, img }) {
    return (
        <article>
            <Recipe
                name={name}
                ingredients={ingredients}
                description={description}
                img={img}
            />
            <Button onClick={() => alert("Przepis polubiony!")}>
                Lubię to!
            </Button>
        </article>
    );
}
