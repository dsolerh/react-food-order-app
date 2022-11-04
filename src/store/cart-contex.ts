import React from "react";
import CartContextType from "../types/cart-context-type";

export const CartContext = React.createContext<CartContextType>({
    items: [],
    totalAmount: 0,
    addItem: (i) => { },
    removeItem: (id) => { },
})