import Modal from "../UI/Modal";
import { CartActions, CartButton, CartButtonAlt, CartList, CartTotal } from "./styles";

function Cart() {
    const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
        .map(item=> (<li>{item.name}</li>))
    return (
        <Modal>
            <CartList>{cartItems}</CartList>
            <CartTotal>
                <span>Total amount</span>
                <span>35.63</span>
            </CartTotal>
            <CartActions>
                <CartButtonAlt>Close</CartButtonAlt>
                <CartButton>Order</CartButton>
            </CartActions>
        </Modal>
    );
}

export default Cart;