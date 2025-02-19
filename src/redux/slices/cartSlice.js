import {createSelector, createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },

        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
    }
})

export const getItemsSelector = createSelector(
    (state, props) => state.cart,
    (state, props) => state,
)

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;