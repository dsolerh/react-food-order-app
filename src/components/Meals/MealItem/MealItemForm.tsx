import Input from "../../UI/Input";
import { Form } from "./styles";

interface MealItemFormProps {
    id?: string
}

function MealItemForm({ id }: MealItemFormProps) {
    return (
        <Form action="">
            <Input
                id={"amount_" + id}
                label="Amount"
                type='number'
                min='1'
                max='5'
                step='1'
                defaultValue='1'
            />
            <button>+ Add</button>
        </Form>
    );
}

export default MealItemForm;