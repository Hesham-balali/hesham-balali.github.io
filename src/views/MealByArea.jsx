import MealList from "../components/MealList";
import { useLoaderData } from "react-router-dom";
import { getMealByArea } from "../api/meals";

export async function loader({ params }) {
  const meals = await getMealByArea(params.name);
  return { meals };
}

const MealByArea = () => {
  const { meals } = useLoaderData();
  return <MealList items={meals} />;
};

export default MealByArea;
