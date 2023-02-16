import ShowMeal from "../components/ShowMeal";
import { useLoaderData } from "react-router-dom";
import { getMealById } from "../api/RequestMeal";

export async function loader({ params }) {
  const meals = await getMealById(params.id);
  console.log("meal by id data:::::");
  console.log(meals);
  return { meals };
}

const MealById = () => {
  const { meals } = useLoaderData();
  return <ShowMeal items={meals} />;
};

export default MealById;
