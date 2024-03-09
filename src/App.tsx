import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([
    "product 1",
    "product 2",
    "product 3",
  ]);
  const handle=()=>{
    setCartItem([])
  }

  return (
    <div>
      <NavBar count={cartItem.length} />
      <Cart item={cartItem} onClear={handle}/>
    </div>
  );
}

export default App;
