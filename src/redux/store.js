import {configureStore, createStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export const store = configureStore({
    reducer: {
        cart:cartReducer
    },
    devTools: true
});