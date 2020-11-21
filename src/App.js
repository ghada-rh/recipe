import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";
import "math";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
    setQuery(""); //bech tfaraghli l input ba3d mana3ml submit
    setRecipes(result.data.hits);
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="App">
      <h1>RECIPES APP</h1>
      <form className="Search-form" onSubmit={onSubmit} value={query}>
        <input type="text" placeholder="Search Food" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <div className="Recipes">
        {recipes !== [] &&
          recipes.map(recipe => {
            <Recipe recipe={recipe} />;
          })}
      </div>
    </div>
  );
};
export default App;
