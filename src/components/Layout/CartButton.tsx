import { useContext } from "react";
import { CartContext } from "../../store/cart-contex";
import ClickableComponent from "../../types/ClickableComponent";
import CartIcon from "../Cart/CartIcon";
import { Button, ButtonBadge, ButtonIcon } from "./styles";

function CartButton({ onClick }: ClickableComponent) {
    const ctx = useContext(CartContext);
    const total = ctx.items.reduce((prev, curr) => prev + curr.amount!, 0)

    return (
        <Button onClick={onClick}>
            <ButtonIcon><CartIcon /></ButtonIcon>
            <span>Your Cart</span>
            <ButtonBadge className="badge">{total}</ButtonBadge>
        </Button>
    );
}

export default CartButton;