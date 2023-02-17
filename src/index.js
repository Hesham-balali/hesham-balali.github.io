import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { loader as rootLoader } from "./views/Root";
import { loader as mealByCategoryLoader } from "./views/MealByCategory";
import { loader as mealByIdLoader } from "./views/MealById";
import { loader as mealByIngredientLoader } from "./views/MealByIngredient";
import Root from "./views/Root";
import Error from "./views/Error";
import MealByCategory from "./views/MealByCategory";
import MealById from "./views/MealById";
import ShowMeal from "./components/ShowMeal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <Error />,
    children: [
      {
        path: "categories/:name",
        loader: mealByCategoryLoader,
        element: <MealByCategory />,
      },
    ],
  },

  {
    path: "meal/:id",
    loader: mealByIdLoader,
    element: <MealById />,
    // element: <p>hi hesham</p>,
  },
  {
    path: "/meal/ingredient/:name",
    loader: mealByIngredientLoader,
    // element: <p>hi hesham</p>,
    element: <MealByCategory />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
