import { useReducer } from "react";
import CartContextType from "../types/cart-context-type";
import ContainerComponent from "../types/ContainerComponent";
import FoodItem from "../types/FoodItem";
import { CartContext } from "./cart-contex";

type CartActionType = 'ADD' | 'REMOVE'
type CartAction = { type: CartActionType, item: FoodItem }
type CartState = {items: FoodItem[], totalAmount: number}

const defaultCartState: CartState = {
    items: [],
    totalAmount: 0
}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD':
            const updatedItems = state.items.concat(action.item)
            const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
    
        default:
            return defaultCartState
    }
}

function CartProvider({ children }: ContainerComponent) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    function addItem(item: FoodItem) {
        dispatchCartAction({ type: 'ADD', item })
    }
    function removeItem(id: string) {

    }

    const ctx: CartContextType = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
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