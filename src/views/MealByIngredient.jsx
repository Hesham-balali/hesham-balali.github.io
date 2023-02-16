import MealList from "../components/MealList";
import { useLoaderData } from "react-router-dom";
import { getMealByIngredient } from "../api/RequestMealByIngre";

export async function loader({ params }) {
  const meals = await getMealByIngredient(params.name);
  return { meals };
}

const MealByIngredient = () => {
  const { meals } = useLoaderData();
  return <MealList items={meals} />;
};

export default MealByIngredient;
