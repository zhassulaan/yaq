import { createContext, useContext, useReducer, useEffect } from 'react';
import productData from '../data/product_data';
import { cartReducer } from './Reducers';
	
const getLocalStorage = () => {
	let cart = localStorage.getItem("cart-items");
	if (cart) {
	  return JSON.parse(localStorage.getItem('cart-items'));
	} else {
	  return [];
	}
}

const Cart = createContext();

function Context({ children }) {
	const products = [...Array(12)].map((product, index) => ({
		id: productData[index].id,
		name: productData[index].name,
		price: productData[index].price,
		currency: productData[index].currency,
		image: productData[index].image,
		images: productData[index].images,
		sale: productData[index].sale,
		brands: productData[index].brands,
		material: productData[index].material,
		characteristic1: productData[index].characteristic1,
		characteristic2: productData[index].characteristic2,
		saved: productData[index].saved,
		type: productData[index].type,
		category: productData[index].category,
		item: productData[index].item,
		gender: productData[index].gender,
		colors: productData[index].colors,
		color: productData.color,
		sizes: productData[index].sizes,
		size: productData.sizs
	}));
	
	const [state, dispatch] = useReducer(cartReducer, {
		products: products,
		cart: getLocalStorage(),
	});
		
	useEffect(() => {
		localStorage.setItem('cart-items', JSON.stringify(state.cart));
	}, [state.cart]);
	
  	return (
	 	<Cart.Provider value={{ state, dispatch }}>
			{ children }
		</Cart.Provider>
  	);
}

export const CartState = () => {
	return useContext(Cart);
}

export default Context;