import { Card } from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { AvailableMealsSection } from "./styles";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

function AvailableMeals() {
    const meals = DUMMY_MEALS.map(meal=> (
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description}
            price={meal.price}
        />
    ))

    return (
        <AvailableMealsSection>
            <Card>
                <ul>{meals}</ul>
            </Card>
        </AvailableMealsSection>
    );
}

export default AvailableMeals;