import React, { ForwardedRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<any> {
    label: string
}

const InputWrapper = styled.div`
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

const Input = React.forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <InputWrapper>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} ref={ref} {...props} />
        </InputWrapper>
    );
})



export default Input;