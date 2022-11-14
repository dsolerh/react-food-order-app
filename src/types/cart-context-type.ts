import FoodItem from "./FoodItem";

export default interface CartContextType {
    items: FoodItem[]
    totalAmount: number
    addItem: (item: FoodItem) => void
    removeItem: (id: string) => void
    clearItems: () => void
}