import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { RecipeContext } from "./context/RecipeContext";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(1);

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  return (
    <RecipeContext.Provider value={selectedRecipe}>
      <div className={styles.container}>
        <List
          recipes={recipes}
          onSelectRecipe={(id) => setSelectedRecipeId(id)}
        />
        <Cookbook heading="Cookbook - exotic dishes" />
      </div>
    </RecipeContext.Provider>
  );
}

export default App;
