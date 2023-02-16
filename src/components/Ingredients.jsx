import IngredientItem from "./IngredientItem";
function Ingredients(props) {
  const { items } = props;
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap">
      {items.map((item, index) => (
        <IngredientItem key={index} name={item.name} measure={item.measure} />
      ))}
    </ul>
  );
}

export default Ingredients;
