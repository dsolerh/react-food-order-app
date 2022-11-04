import CartContextType from "../types/cart-context-type";
import ContainerComponent from "../types/ContainerComponent";
import FoodItem from "../types/FoodItem";
import { CartContext } from "./cart-contex";

function CartProvider({ children }: ContainerComponent) {

    function addItem(item: FoodItem) {

    }
    function removeItem(id: string) {

    }

    const ctx: CartContextType = {
        items: [],
        totalAmount: 0,
        addItem,
        removeItem
    }
    return (
        <CartContext.Provider value={ctx}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;