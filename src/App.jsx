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
            <Item name={"MacBook Pro"} price={100000} />
            <Item name={"MacBook Air"} price={80000} />
            <Item name={"iMac"} price={200000} />
            <Item name={"iPhone"} price={75000} />
            <Item name={"iPad"} price={50000} />
            <Item name={"Air Pods"} price={22000} />



        </div>
    )
}

export default App
