import { Link } from "react-router-dom";

const Category = (props) => {
  const { name, description, thumb } = props;
  return (
    <div className="max-w-xs h-full bg-slate-100 rounded-3xl p-4 mb-6 shadow-xl">
      <img className="rounded-3xl mb-3.5" src={thumb} alt={name} />
      <Link to={`category/${name}`}>
        <h3 className="font-mono font-bold text-xl hover:text-blue-600">
          {name}
        </h3>
      </Link>
      <p className="italic text-justify">{description.substring(0, 150)}...</p>
    </div>
  );
};

export default Category;
