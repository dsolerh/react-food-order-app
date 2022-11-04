import { useReducer } from "react";
import CartContextType from "../types/cart-context-type";
import ContainerComponent from "../types/ContainerComponent";
import FoodItem from "../types/FoodItem";
import { CartContext } from "./cart-contex";

type CartActionType = 'ADD' | 'REMOVE'
type CartAction = { type: CartActionType, item: FoodItem }
type CartState = { items: FoodItem[], totalAmount: number }

const defaultCartState: CartState = {
    items: [],
    totalAmount: 0
}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price

            const index = state.items.findIndex((val) => val.id === action.item.id)
            const item = state.items[index]

            let updatedItems: FoodItem[]
            if (item) {
                const updatedItem = {
                    ...item,
                    amount: item.amount + action.item.amount
                }
                updatedItems = [...state.items]
                updatedItems[index] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item)
            }

            console.log(updatedItems);

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