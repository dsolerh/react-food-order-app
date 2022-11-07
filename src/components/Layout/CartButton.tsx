import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-contex";
import ClickableComponent from "../../types/ClickableComponent";
import CartIcon from "../Cart/CartIcon";
import { Button, ButtonBadge, ButtonIcon } from "./styles";

function CartButton({ onClick }: ClickableComponent) {
    const ctx = useContext(CartContext);
    const [bumpButton, setBumpButton] = useState(false)
    const total = ctx.items.reduce((prev, curr) => prev + curr.amount!, 0)


    useEffect(() => {
        if (ctx.items.length !== 0) {
            setBumpButton(true);
        }

        const t = setTimeout(()=>{
            setBumpButton(false);
        },300)

        return () => {
            clearTimeout(t)
        }
    }, [ctx.items])

    return (
        <Button onClick={onClick} className={bumpButton ? 'bump' : ''}>
            <ButtonIcon><CartIcon /></ButtonIcon>
            <span>Your Cart</span>
            <ButtonBadge className="badge">{total}</ButtonBadge>
        </Button>
    );
}

export default CartButton;