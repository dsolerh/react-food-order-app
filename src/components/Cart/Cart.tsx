import { useContext, useState } from "react";
import { API_URL } from "../../constants/api";
import { CartContext } from "../../store/cart-contex";
import OrderData from "../../types/OrderData";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { CartActions, CartButton, CartButtonAlt, CartList, CartTotal } from "./styles";

interface CartProps {
    onClose: () => void
}

function Cart({ onClose }: CartProps) {
    const ctx = useContext(CartContext)
    const [showCheckout, setShowCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const submitOrder = async (order: OrderData) => {
        setIsSubmitting(true);
        await fetch(`${API_URL}/orders.json`, {
            method: 'POST',
            body: JSON.stringify({
                order_data: order,
                order_items: ctx.items,
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        ctx.clearItems();
    }

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

    const modalContent = <>
        <CartList>{cartItems}</CartList>
        <CartTotal>
            <span>Total amount</span>
            <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
        </CartTotal>
        {showCheckout && <Checkout onCancel={() => onClose && onClose()} onSubmit={submitOrder} />}
        {!showCheckout && modalActions}
    </>
    
    const isSubmittingContent = <p>Sending order data...</p>
    const didSubmitContent = <p>Successfully sent the order!</p>

    return (
        <Modal onClose={onClose}>
            {(!isSubmitting && !didSubmit) && modalContent}
            {isSubmitting && isSubmittingContent}
            {didSubmit && didSubmitContent}
        </Modal>
    );
}

export default Cart;