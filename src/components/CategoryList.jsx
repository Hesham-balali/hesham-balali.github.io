import Category from "./Category";

const CategoryList = (props) => {
  const { items } = props;
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {items.map((item) => (
        <div className="basis-3/12" key={item.id}>
          <Category
            id={item.id}
            name={item.name}
            thumb={item.thumb}
            description={item.description}
          />
        </div>
      ))}
    </section>
  );
};

export default CategoryList;
