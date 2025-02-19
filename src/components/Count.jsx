import React from 'react'
import {useSelector} from "react-redux";

const Count = () => {
    const count = useSelector(state => state)
    return (
        <h1>Count : {count}</h1>
    )
}
export default Count
