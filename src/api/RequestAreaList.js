import axios from "axios";

const formatMealSummery = (meal) => {
  const { strArea } = meal;
  return {
    area: strArea,
  };
};
const formatMealsSummery = (meals) =>
  meals.map((meal) => formatMealSummery(meal));
export const getAreaList = async () => {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    return formatMealsSummery(data.meals);
  } catch (e) {
    return Promise.reject(e);
  }
};
export default {
  getAreaList,
};
