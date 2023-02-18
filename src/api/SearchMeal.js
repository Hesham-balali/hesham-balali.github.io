import axios from "axios";

const formatMealSummery = (meal) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  return {
    id: idMeal,
    name: strMeal,
    thumb: strMealThumb,
  };
};
const formatMealsSummery = (meals) =>
  meals.map((meal) => formatMealSummery(meal));
export const searchMeal = async (ingre = "") => {
  if (!ingre) {
    return;
  }
  try {
    const { data } = await axios.get(
      `www.themealdb.com/api/json/v1/1/search.php?s=${ingre
        .split(" ")
        .join("_")}`
    );
    return formatMealsSummery(data.meals);
  } catch (e) {
    return Promise.reject(e);
  }
};
export default {
  searchMeal,
};
