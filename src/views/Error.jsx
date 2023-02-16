import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <main>
      <h2>{error.status}</h2>
      <p>{error.statusText}</p>
    </main>
  );
};

export default Error;
