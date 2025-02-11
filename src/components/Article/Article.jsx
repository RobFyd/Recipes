import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";

export function Article(props) {
  return (
    <article>
      <Recipe {...props} />
      <Button onClick={() => alert("Przepis polubiony!")}>Lubię to!</Button>
    </article>
  );
}
