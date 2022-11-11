import { useEffect, useState } from "react";
import FoodItem from "../../types/FoodItem";
import { Card } from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { AvailableMealsSection } from "./styles";

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

type Meals = Required<Omit<FoodItem, 'amount'>>[]

function AvailableMeals() {
    const [meals, setMeals] = useState<Meals>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://react-complete-course-c5824-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
            const data = await response.json()

            const meals: Meals = [];
            for (const key in data) {
                meals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                })
            }

            return meals
        })().then((data) => {
            setMeals(data);
        })

    }, [])

    const mealsList = meals.map(meal => (
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
                <ul>{mealsList}</ul>
            </Card>
        </AvailableMealsSection>
    );
}

export default AvailableMeals;