import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CardProvider";

function App() {
  const [showCart, setShowCart] = useState(false)
  return (
    <CartProvider>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Header onOpenCart={()=>setShowCart(true)}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
