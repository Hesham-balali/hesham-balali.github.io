import CategoryList from "../components/CategoryListHomePage";
import { useLoaderData } from "react-router-dom";
import { getCategoryList } from "../api/meals";

export async function loader() {
  const categories = await getCategoryList();
  return { categories };
}
const Category = () => {
  const { categories } = useLoaderData();
  return <CategoryList items={categories} />;
};

export default Category;
