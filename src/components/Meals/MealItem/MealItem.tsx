import { useContext } from "react";
import { CartContext } from "../../../store/cart-contex";
import FoodItem from "../../../types/FoodItem";
import MealItemForm from "./MealItemForm";
import { Meal, MealDescription, MealPrice } from "./styles";

interface MealItemProps extends Partial<FoodItem> {
    id: string
    name: string
    description: string
    price: number
}

function MealItem({ id, name, description, price }: MealItemProps) {
    const ctx = useContext(CartContext)

    return (
        <Meal>
            <div>
                <h3>{name}</h3>
                <MealDescription>{description}</MealDescription>
                <MealPrice>{`$${price.toFixed(2)}`}</MealPrice>
            </div>
            <div>
                <MealItemForm id={id} onAddData={(amount) => ctx.addItem({ id, name, description, price, amount })} />
            </div>
        </Meal>
    );
}

export default MealItem;