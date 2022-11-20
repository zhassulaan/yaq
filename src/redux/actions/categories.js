import { fetchCategories } from "../../http/catalogAPI";

export const getAllCategories = () => (dispatch) => {
  fetchCategories().then((data) => dispatch(setCategories(data)));
};

export const setCategories = (items) => ({
  type: "SET_CATEGORIES",
  payload: items,
});

export const setCategoriesJackets = (items) => ({
  type: "SET_CATEGORIES_JACKETS",
  payload: items,
});
