import MealList from "../components/MealList";
import { useLoaderData } from "react-router-dom";
import { searchMeal } from "../api/meals";

export async function loader({ params }) {
  const meals = await searchMeal(params.name);
  return { meals };
}

const SearchMealByName = () => {
  const { meals } = useLoaderData();
  console.log(meals);
  return <MealList items={meals} />;
};

export default SearchMealByName;
