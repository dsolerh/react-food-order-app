import { useEffect, useState } from "react";
import { API_URL } from "../../constants/api";
import FoodItem from "../../types/FoodItem";
import { Card } from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { AvailableMealsSection, ErrorSection, LoadingSection } from "./styles";

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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>()

    useEffect(() => {
        setLoading(true);
        async function getData() {
            const response = await fetch(`${API_URL}/meals.json`);

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

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

            setMeals(meals);
            setLoading(false);

        }
        getData()
            .catch(e => {
                setLoading(false)
                setError((e as Error).message)
            });

    }, [])

    if (loading) {
        return (
            <LoadingSection>
                <p>Loading...</p>
            </LoadingSection>
        )
    }

    if (error) {
        return (
            <ErrorSection>
                <p>{error}</p>
            </ErrorSection>
        )
    }

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