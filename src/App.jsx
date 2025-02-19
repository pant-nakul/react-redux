import './App.css'
import CounterOperations from "./components/CounterOperations.jsx";
import Count from "./components/Count.jsx";
import Item from "./components/Item.jsx";
import Cart from "./components/Cart.jsx";

function App() {


    return (
        <div className="App">
            <Cart/>
            <h1>Items</h1>
            <Item id={1} name={"MacBook Pro"} price={100000} />
            <Item id={2} name={"MacBook Air"} price={80000} />
            <Item id={3} name={"iMac"} price={200000} />
            <Item id={4} name={"iPhone"} price={75000} />
            <Item id={5} name={"iPad"} price={50000} />
            <Item id={6} name={"Air Pods"} price={22000} />



        </div>
    )
}

export default App
