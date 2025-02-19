import React from 'react'
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/slices/cartSlice.js";

const Item = (props) => {

    const dispatch = useDispatch()
    return (
        <div className="item-card">
            <h4>{props.name} </h4>
            <p>${props.price}</p>
            <button onClick={()=> dispatch(addToCart(props))}
            >Add to Cart</button>
        </div>
    )
}
export default Item
