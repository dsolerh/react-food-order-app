import styled from "styled-components";

export const CartList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
`

export const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
`

export const CartActions = styled.div`
    text-align: right;
    
    & button {
        font: inherit;
        cursor: pointer;
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
    background-color: transparent;
    color: #8a2b06;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #8a2b06;
    padding: 1rem 0;
    margin: 1rem 0;

    & h2 {
        margin: 0 0 0.5rem 0;
        color: #363636;
    }
`

export const ItemSummary = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;


    & .price {
        font-weight: bold;
        color: #8a2b06;
    }

    & .amount {
        font-weight: bold;
        border: 1px solid #ccc;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        color: #363636;
    }
`

export const ItemActions = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    & button {
        font: inherit;
        font-weight: bold;
        font-size: 1.25rem;
        color: #8a2b06;
        border: 1px solid #8a2b06;
        width: 3rem;
        text-align: center;
        border-radius: 6px;
        background-color: transparent;
        cursor: pointer;
        margin-left: 1rem;
        margin: 0.25rem;
    }

    & button:hover,
    & button:active {
        background-color: #8a2b06;
        color: white;
    }
`

export const CheckoutForm = styled.form`
    margin: 1rem 0 0 0;
    height: 15rem;
    overflow: scroll;
`