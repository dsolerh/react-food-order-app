import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false)
  return (
    <>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <Header onOpenCart={()=>setShowCart(true)}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
