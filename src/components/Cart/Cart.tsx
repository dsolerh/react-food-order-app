import { useContext } from "react";
import { CartContext } from "../../store/cart-contex";
import Modal from "../UI/Modal";
import { CartActions, CartButton, CartButtonAlt, CartList, CartTotal } from "./styles";

interface CartProps {
    onClose: () => void
}

function Cart({ onClose }: CartProps) {
    const ctx = useContext(CartContext)
    const cartItems = ctx.items.map(item => (<li>{item.name}</li>))

    return (
        <Modal onClose={onClose}>
            <CartList>{cartItems}</CartList>
            <CartTotal>
                <span>Total amount</span>
                <span>{`$${ctx.totalAmount.toFixed(2)}`}</span>
            </CartTotal>
            <CartActions>
                <CartButtonAlt onClick={() => onClose && onClose()}>Close</CartButtonAlt>
                {ctx.items.length > 0 && <CartButton>Order</CartButton>}
            </CartActions>
        </Modal>
    );
}

export default Cart;