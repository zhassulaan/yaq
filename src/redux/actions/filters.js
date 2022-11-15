import { fetchAllProducts, fetchBrands } from "../../http/catalogAPI";

export const getAllFilters = () => (dispatch) => {
  fetchAllProducts().then((data) => dispatch(setFilterProducts(data.rows)));
};

export const setFilterProducts = (items) => ({
  type: "SET_FILTER_PRODUCTS",
  payload: items,
});
