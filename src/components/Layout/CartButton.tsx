import ClickableComponent from "../../types/ClickableComponent";
import CartIcon from "../Cart/CartIcon";
import { Button, ButtonBadge, ButtonIcon } from "./styles";

function CartButton({ onClick }: ClickableComponent) {
    return (
        <Button onClick={onClick}>
            <ButtonIcon><CartIcon /></ButtonIcon>
            <span>Your Cart</span>
            <ButtonBadge className="badge">3</ButtonBadge>
        </Button>
    );
}

export default CartButton;