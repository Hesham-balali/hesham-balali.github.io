import MealList from "../components/MealList";
import { useLoaderData } from "react-router-dom";
import { getMealByCategory } from "../api/meals";

export async function loader({ params }) {
  const meals = await getMealByCategory(params.name);
  return { meals };
}

const MealByCategory = () => {
  const { meals } = useLoaderData();
  return <MealList items={meals} />;
};

export default MealByCategory;
