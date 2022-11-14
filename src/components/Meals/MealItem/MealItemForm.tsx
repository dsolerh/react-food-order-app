import { FormEvent, useRef, useState } from "react";
import { NumberInput } from "../../UI/Input";
import { Form } from "./styles";

interface MealItemFormProps {
    id?: string
    onAddData: (amount: number) => void
}

function MealItemForm({ id, onAddData }: MealItemFormProps) {
    const amountRef = useRef<HTMLInputElement>(null)
    const [isValid, setIsValid] = useState(true)

    function submit(e: FormEvent) {
        e.preventDefault()

        const amountVal = amountRef.current?.value
        const amountNum = +amountVal!

        if ((amountVal && amountVal.trim() === '') ||
            amountNum < 1 ||
            amountNum > 5) {
            setIsValid(false)
            return
        }

        onAddData(amountNum)
    }
    return (
        <Form onSubmit={submit}>
            <NumberInput
                id={"amount_" + id}
                ref={amountRef}
                label="Amount"
                min='1'
                max='5'
                step='1'
                defaultValue='1'
            />
            <button type="submit">+ Add</button>
            {!isValid && <p>Please enter a valid amount (1-5).</p>}
        </Form>
    );
}

export default MealItemForm;