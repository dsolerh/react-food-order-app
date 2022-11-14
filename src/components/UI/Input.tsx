import React, { ForwardedRef, InputHTMLAttributes, RefAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<any> {
    label: string
    error?: string
}


const In = (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} ref={ref} {...props} className='' />
            {props.error && <p>{props.error}</p>}
        </div>
    );
}

const Number = React.forwardRef((props: Omit<InputProps, 'type'>, ref: ForwardedRef<HTMLInputElement>) => {
    return In({ ...props, type: 'number' }, ref)
})

const Input = React.forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return In(props, ref)
})

export const NumberInput = styled(Number)`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    & label {
        font-weight: bold;
        margin-right: 1rem;
    }

    & input {
        width: 3rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        font: inherit;
        padding-left: 0.5rem;
    }
`

type CustomInputProps = InputProps & RefAttributes<HTMLInputElement> & { invalid?: boolean }

export const CustomInput = styled(Input) <CustomInputProps>`
    margin-bottom: 0.5rem;
    
    & label {
        color: ${props => props.invalid ? '#ca3e51' : 'initial'};
        font-weight: bold;
        margin-bottom: 0.25rem;
        display: block;
    }

    & input {
        font: inherit;
        border: 1px solid #ccc;
        border-color: ${props => props.invalid ? '#aa0b20' : '#ccc'};
        background-color: ${props => props.invalid ? '#ffeff1' : 'initial'};
        border-radius: 4px;
        width: 20rem;
        max-width: 100%;
    }

    & p {
        color: ${props => props.invalid ? '#aa0b20' : 'initial'};
    }
`