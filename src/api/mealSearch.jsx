import React, { useState, useEffect } from "react";
import axios from "axios";

function MealSearch() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function searchMeals() {
      if (query.trim() === "") {
        setMeals([]);
      } else {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        setMeals(response.data.meals);
      }
    }
    searchMeals();
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for meals..."
      />
    </div>
  );
}

export default MealSearch;
