// import { Link } from "react-router-dom";
const MealCard = (props) => {
  const { id, name, thumb } = props;
  return (
    <div className="max-w-xs h-full bg-slate-100 rounded-3xl p-4 mb-6 shadow-xl">
      <img className="rounded-3xl mb-3.5" src={thumb} alt={name} />

      {/* <Link to={`meal/${id}`}>
        <h3>{name}</h3>
      </Link> */}

      <a href={`/meal/${id}`}>
        <h3 className="font-mono font-bold text-xl hover:text-blue-600">
          {name}
        </h3>
      </a>
    </div>
  );
};

export default MealCard;
