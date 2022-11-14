import { useContext, useState } from "react";
import { CartContext } from "../../store/cart-contex";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { CartActions, CartButton, CartButtonAlt, CartList, CartTotal } from "./styles";

interface CartProps {
    onClose: () => void
}

function Cart({ onClose }: CartProps) {
    const ctx = useContext(CartContext)
    const [showCheckout, setShowCheckout] = useState(false)

    const cartItems = ctx.items.map(item => (
        <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={() => { ctx.addItem({ ...item, amount: 1 }) }}
            onRemove={() => { ctx.removeItem(item.id!) }}
        />
    ))

    const modalActions = <CartActions>
        <CartButtonAlt onClick={() => onClose && onClose()}>Close</CartButtonAlt>
        {ctx.items.length > 0 && <CartButton onClick={() => setShowCheckout(true)}>Order</CartButton>}
    </CartActions>

    return (
        <Modal onClose={onClose}>
            <CartList>{cartItems}</CartList>
            <CartTotal>
                <span>Total amount</span>
                <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
            </CartTotal>
            {showCheckout && <Checkout onCancel={() => onClose && onClose()} />}
            {!showCheckout && modalActions}
        </Modal>
    );
}

export default Cart;