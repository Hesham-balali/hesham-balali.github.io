import { useState, useEffect } from "react";
import { getCategoryList } from "../api/meals";
const useCategories = () => {
  const [status, setStatus] = useState("idle");
  const [categories, setCategories] = useState([]);
  const fetchCategories = () => {
    if (status === "loading") {
      return;
    }
    setStatus("loading");
    getCategoryList()
      .then((categories) => {
        setCategories(categories);
        setStatus("succeed");
      })
      .catch(() => {
        setStatus("failed");
      });
  };
  useEffect(() => {
    if (status === "idle") {
      fetchCategories();
    }
  });
  return { status, categories, fetchCategories };
};

export default useCategories;
