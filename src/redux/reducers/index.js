import { combineReducers } from "redux";
import filtersReducer from "./filters";
import productsReducer from "./products";
import brandReducer from "./brands";
import categoryReducer from "./categories";

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
  brands: brandReducer,
  categories: categoryReducer,
});

export default rootReducer;
