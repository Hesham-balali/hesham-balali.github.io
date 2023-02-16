import IngredientIcon from "../img/item.png";

function IngredientItem(props) {
  const { name, measure } = props;
  return (
    <li className="flex basis-1/2">
      <div>
        <img
          className="w-12 border-white	border-2 m-2 p-1 rounded-xl shadow-lg"
          src={`https://www.themealdb.com/images/ingredients/${name}.png`}
          // src={IngredientIcon}
          alt=""
        />
      </div>
      <div className="p-1 self-center">
        <a href={`ingredient/${name}`}>
          <p className="font-semibold text-base hover:text-blue-600">{name}</p>
        </a>
        <p className="font-medium text-sm text-gray-500">{measure}</p>
      </div>
    </li>
  );
}

export default IngredientItem;
