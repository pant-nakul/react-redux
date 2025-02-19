import React from 'react'

const Item = (props) => {


    return (
        <div className="item-card">
            <h4>{props.name} </h4>
            <p>${props.price}</p>
            <button>Add to Cart</button>
        </div>
    )
}
export default Item
