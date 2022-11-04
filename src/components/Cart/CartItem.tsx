import FoodItem from "../../types/FoodItem";
import { ItemActions, ItemSummary, ListItem } from "./styles";

interface CartItemProps extends Partial<FoodItem> {
    onRemove: ()=>void
    onAdd: ()=>void
}

function CartItem({ name, price, amount, onAdd, onRemove }: CartItemProps) {
    return (
        <ListItem>
            <div>
                <h2>{name}</h2>
                <ItemSummary>
                    <span className='price'>{`$${price!.toFixed(2)}`}</span>
                    <span className='amount'>x {amount}</span>
                </ItemSummary>
            </div>
            <ItemActions>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </ItemActions>
        </ListItem>
    );
}

export default CartItem;