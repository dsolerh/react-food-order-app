import CartIcon from "../Cart/CartIcon";
import { Button, ButtonBadge, ButtonIcon } from "./styles";

function CartButton() {
    return (
        <Button>
            <ButtonIcon><CartIcon/></ButtonIcon>
            <span>Your Cart</span>
            <ButtonBadge className="badge">3</ButtonBadge>
        </Button>
    );
}

export default CartButton;