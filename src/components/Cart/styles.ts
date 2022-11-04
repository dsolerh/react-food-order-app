import styled from "styled-components";

export const CartList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
`

export const CartActions = styled.div`
    text-align: right;

    & button {
        font: inherit;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #8a2b06;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        margin-left: 1rem;
    }

    & button:hover,
    & button:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
    }
`

export const CartButton = styled.button`
    background-color: #8a2b06;
    color: white;       
`

export const CartButtonAlt = styled.button`
    color: #8a2b06;
`