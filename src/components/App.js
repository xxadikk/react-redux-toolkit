import React from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./header/Header";
import User from "./user/User";
import { useGetRecipesQuery } from "../story/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";

const userId = 1;

const App = () => {
  // const { isLoading, data } = useGetRecipesQuery(undefined, {
  //   skip: !userId,
  // });
  const { isLoading, data } = useGetRecipesQuery();

  console.log(data);

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />)
        ) : (
          <div>NOT FOUND</div>
        )}
        <RecipeItem
          recipe={{
            id: 1,
            name: "Лазанья",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Каша",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Паста",
          }}
        />
      </div>
    </section>
  );
};

export default App;
