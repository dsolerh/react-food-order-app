import FoodItem from "../../../types/FoodItem";
import MealItemForm from "./MealItemForm";
import { Meal, MealDescription, MealPrice } from "./styles";

interface MealItemProps extends FoodItem {
    id: string
    name: string
    description: string
    price: number
}

function MealItem({id, name, description, price }: MealItemProps) {
    return (
        <Meal>
            <div>
                <h3>{name}</h3>
                <MealDescription>{description}</MealDescription>
                <MealPrice>{`$${price.toFixed(2)}`}</MealPrice>
            </div>
            <div>
                <MealItemForm id={id}/>
            </div>
        </Meal>
    );
}

export default MealItem;