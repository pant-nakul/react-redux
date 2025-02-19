import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getItemsSelector, removeFromCart} from "../redux/slices/cartSlice.js";

const Cart = () => {
    const items = useSelector(getItemsSelector);
    console.log(items)
    const total = items.reduce((total, item) => total + item.price, 0);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Cart</h1>
            <h2>Total Items : {items.length || 0}</h2>
            {items.map((item) => (
                <>
                    <li key={1}> {item.name} - {item.price} |
                        <button onClick={() => (dispatch(removeFromCart(item)))}>Remove from cart</button></li>
                </>
            ))}

            <h5> Total Bill : ${total}</h5>
        </div>
    )
}
export default Cart
