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

function addItem(state: CartState, item: FoodItem): CartState {
    const updatedTotalAmount = state.totalAmount + item.amount * item.price

    const index = state.items.findIndex((val) => val.id === item.id)
    const foundItem = state.items[index]

    let updatedItems: FoodItem[]
    if (foundItem) {
        const updatedItem = {
            ...foundItem,
            amount: foundItem.amount + item.amount
        }
        updatedItems = [...state.items]
        updatedItems[index] = updatedItem
    } else {
        updatedItems = state.items.concat(item)
    }
    
    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
}

function removeItem(state: CartState, id: string): CartState {
    const index = state.items.findIndex((val) => val.id === id)
    const item = state.items[index]
    

    const updatedTotalAmount = state.totalAmount - item.price
    let updatedItems: FoodItem[]
    if (item.amount === 1) {
        updatedItems = state.items.filter(i => i.id !== id)
    } else {
        updatedItems = [...state.items]
        updatedItems[index] = {
            ...item,
            amount: item.amount - 1
        }
    }


    return {
        totalAmount: updatedTotalAmount,
        items: updatedItems
    }
}

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD':
            return addItem(state, action.item)

        case 'REMOVE':
            return removeItem(state, action.item.id!)

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
        dispatchCartAction({ type: "REMOVE", item: { id } as FoodItem })
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