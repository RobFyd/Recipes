import { useContext } from "react";
import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";
import { IsLoggedInStateContext } from "../../context/IsLoggedInStateContext";

export function Article() {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInStateContext);

  return (
    <article>
      <Recipe />
      {isLoggedIn ? (
        <Button onClick={() => alert("Przepis polubiony!")}>Like!</Button>
      ) : (
        <>
          <div>Log in to like this recipe</div>
          <Button onClick={() => setIsLoggedIn(true)}>Log in</Button>
        </>
      )}
    </article>
  );
}
