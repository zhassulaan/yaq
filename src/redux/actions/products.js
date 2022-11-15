import { ThemeConsumer } from "styled-components";
import { fetchAllProducts, fetchBrands } from "../../http/catalogAPI";

export const getAllProducts = () => (dispatch) => {
  fetchAllProducts().then((data) => dispatch(setProducts(data.rows)));
};

export const getAllBrands = () => (dispatch) => {
  fetchBrands().then((data) => dispatch(setBrands(data)));
};

export const setProducts = (items) => ({
  type: "SET_PRODUCTS",
  payload: items,
});

export const setBrands = (items) => ({
  type: "SET_BRANDS",
  payload: items,
});
