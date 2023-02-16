import Header from "../components/Header";
import Footer from "../components/Footer";
import cats from "../data";
import CategoryList from "../components/CategoryList";
import { getCategoryList } from "../api/meals";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const categories = await getCategoryList();
  return { categories };
}

function Root() {
  const { categories } = useLoaderData();
  return (
    <main className="w-3/4 mx-auto">
      <Header />
      <h2 className="text-4xl font-extrabold mb-8 text-center text-slate-800">
        Catergories
      </h2>
      <CategoryList items={categories} />
      <Footer />
    </main>
  );
}

export default Root;
