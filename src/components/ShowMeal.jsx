import Header from "./Header";
import Footer from "./Footer";
import Ingredient from "./Ingredients";
const ShowMeal = (props) => {
  // console.log("hi me");
  // console.log(props);
  const data = props.items;
  console.log("show meal data:::::");
  console.log(props);

  return (
    <main className="w-3/4 mx-auto">
      <Header />
      <div className="flex flex-auto bg-slate-100 border-white rounded-3xl shadow-xl">
        <div className="w-5/12 m-5">
          <img className="rounded-3xl mb-4" src={data.thumb} alt={data.name} />
          <h2 className="text-2xl font-extrabold text-neutral-700">
            Ingredients:
          </h2>
          <div className="flex">
            <Ingredient className="w-3/12" items={data.ingredients} />
          </div>
        </div>
        <div className="w-5/12 m-5">
          <h2 className="text-3xl font-extrabold mb-5">{data.name}</h2>
          <p className="text-xl text-justify">{data.instruction}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ShowMeal;
