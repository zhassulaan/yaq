export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const product = state.products.find((item) => 
				(item.id === action.payload.id)
			);

			const inCart = state.cart.find((item) => 
				item.product.id === action.payload.id)
          		?
            		true
          		: 
						false;

			if (inCart) {
				state.cart.map((item) => 
					(item.product.id === action.payload.id) 
						?
							item.quantity += 0.5
						:
							item.quantity
				)
				
				return {
					...state,
					cart: [
						...state.cart,
					]
				};
			}
					 
			else
				return {
					...state,
					cart: [
						...state.cart,
						{
							product: product,
							quantity: 1,
						},
					]
				};
			
		case "REMOVE_FROM_CART":
			return { 
				...state, 
				cart: state.cart.filter((c) => 
					c.product.id !== action.payload.id
				)
			};

		case "INCREMENT-QUANTITY":
			state.cart.map((item) => 
				(item.product.id === action.payload.id) 
					?
						item.quantity += 0.5
					:
						item.quantity
				)

			return {
				...state,
				cart: [
					...state.cart,
				]
			};
		
		case "DECREMENT-QUANTITY":
			state.cart.map((item) => 
				(item.product.id === action.payload.id && item.quantity > 1)  
					?
						item.quantity -= 0.5
					:
						item.quantity
				)

			return {
				...state,
				cart: [
					...state.cart,
				]
			};

		default:
			return state;
	}
};