import { FormEvent, useRef, useState } from "react";
import { CustomInput } from "../UI/Input";
import { CartActions, CartButton, CartButtonAlt, CheckoutForm } from "./styles";

interface CheckoutProps {
    onCancel: () => void
}

const isEmpty = (s: string) => s.trim() === '';
const maxLenght = (n: number) => (s: string) => s.trim().length > n;
const minLenght = (n: number) => (s: string) => s.trim().length < n;
const lenght = (n: number) => (s: string) => s.trim().length === n;

function Checkout({ onCancel }: CheckoutProps) {
    const [error, setError] = useState<{name?: string, street?:string, code?:string, city?: string}>({
        name: undefined,
        street: undefined,
        code: undefined,
        city: undefined
    })
    const nameRef = useRef<HTMLInputElement>(null);
    const streetRef = useRef<HTMLInputElement>(null);
    const codeRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);

    const submit = (e: FormEvent) => {
        e.preventDefault()

        const nameVal = nameRef.current!.value;
        const streetVal = streetRef.current!.value;
        const codeVal = codeRef.current!.value;
        const cityVal = cityRef.current!.value;

        const nameValid = !isEmpty(nameVal);
        const streetValid = !isEmpty(streetVal);
        const codeValid = lenght(5)(codeVal);
        const cityValid = !isEmpty(cityVal);

        const isValid = nameValid && streetValid && codeValid && cityValid

        setError({
            name: nameValid ? undefined: 'The name field is required',
            street: streetValid ? undefined: 'The street field is required',
            code: codeValid ? undefined: 'The code field must be 5 characters long',
            city: cityValid ? undefined: 'The city field is required',
        })

        if (isValid) {

        }
    }

    return (
        <CheckoutForm onSubmit={submit}>
            <CustomInput
                id="name"
                ref={nameRef}
                type='text'
                error={error.name}
                invalid={!!error.name}
                label='Your Name'
            />
            <CustomInput
                id="street"
                ref={streetRef}
                type='text'
                error={error.street}
                invalid={!!error.street}
                label="Street"
            />
            <CustomInput
                id="code"
                ref={codeRef}
                type='text'
                error={error.code}
                invalid={!!error.code}
                label='Postal Code'
            />
            <CustomInput
                id="city"
                ref={cityRef}
                type='text'
                error={error.city}
                invalid={!!error.city}
                label='City'
            />
            <CartActions>
                <CartButtonAlt type="button" onClick={onCancel}>Cancel</CartButtonAlt>
                <CartButton>Confirm</CartButton>
            </CartActions>
        </CheckoutForm>
    );
}

export default Checkout;