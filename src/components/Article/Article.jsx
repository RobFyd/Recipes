import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";

export function Article() {
  return (
    <article>
      <Recipe />
      <Button onClick={() => alert("Przepis polubiony!")}>Lubię to!</Button>
    </article>
  );
}
