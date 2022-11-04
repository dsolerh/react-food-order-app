import FoodItem from "../../types/FoodItem";
import Modal from "../UI/Modal";
import { CartActions, CartButton, CartButtonAlt, CartList } from "./styles";

function Cart() {
    const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]
        .map(item=> (<li>{item.name}</li>))
    return (
        <Modal>
            <CartList>{cartItems}</CartList>
            <div>
                <span>Total amount</span>
                <span>35.63</span>
            </div>
            <CartActions>
                <CartButtonAlt>Close</CartButtonAlt>
                <CartButton>Order</CartButton>
            </CartActions>
        </Modal>
    );
}

export default Cart;