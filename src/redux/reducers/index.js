import { combineReducers } from "redux";
import filtersReducer from "./filters";
import productsReducer from "./products";
import brandReducer from "./brands";

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
  brands: brandReducer,
});

export default rootReducer;
