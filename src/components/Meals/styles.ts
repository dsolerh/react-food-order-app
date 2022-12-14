import styled from "styled-components";

export const SummarySection = styled.section`
    text-align: center;
    max-width: 45rem;
    width: 90%;
    margin: auto;
    margin-top: -10rem;
    position: relative;
    background-color: #383838;
    color: white;
    border-radius: 14px;
    padding: 1rem;
    box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

    & h2 {
        font-size: 2rem;
        margin-top: 0;
    }
`

export const AvailableMealsSection = styled.section`
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    animation: meals-appear 1s ease-out forwards;


    & ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    @keyframes meals-appear {
        from {
            opacity: 0;
            transform: translateY(3rem);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const LoadingSection = styled.section`
    text-align: center;
    color: white;
`

export const ErrorSection = styled.section`
    text-align: center;
    color: red;
`