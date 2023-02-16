import Header from "./Header";
import Footer from "./Footer";
import MealCard from "./MealCard";

const MealList = (props) => {
  const { items } = props;

  return (
    <main className="w-3/4 mx-auto">
      <Header />
      <section className="flex flex-wrap gap-4 justify-center">
        {items.map((item) => (
          <div className="basis-2/12" key={item.id}>
            <MealCard id={item.id} name={item.name} thumb={item.thumb} />
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default MealList;
