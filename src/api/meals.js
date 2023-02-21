import axios from "axios";

const formatCategory = (category) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    category;
  return {
    id: idCategory,
    name: strCategory,
    thumb: strCategoryThumb,
    description: strCategoryDescription,
  };
};
const formatCategories = (categories) =>
  categories.map((cat) => formatCategory(cat));

export const getCategoryList = async () => {
  try {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return formatCategories(data.categories);
  } catch (e) {
    return Promise.reject(e);
  }
};

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
export const getMealByCategory = async (category = "") => {
  if (!category) {
    return;
  }
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php`,
      {
        params: {
          c: category,
        },
      }
    );
    return formatMealsSummery(data.meals);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const searchMeal = async (name = "") => {
  if (!name) {
    return;
  }
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php`,
      {
        params: {
          s: name,
        },
      }
    );
    return formatMealsSummery(data.meals);
  } catch (e) {
    return Promise.reject(e);
  }
};

export default {
  searchMeal,
  getCategoryList,
  getMealByCategory,
};
