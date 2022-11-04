import MealItemForm from "./MealItemForm";
import { Meal, MealDescription, MealPrice } from "./styles";

interface MealItemProps {
    name: string
    description: string
    price: number
}

function MealItem({ name, description, price }: MealItemProps) {
    return (
        <Meal>
            <div>
                <h3>{name}</h3>
                <MealDescription>{description}</MealDescription>
                <MealPrice>{`$${price.toFixed(2)}`}</MealPrice>
            </div>
            <div>
                <MealItemForm/>
            </div>
        </Meal>
    );
}

export default MealItem;