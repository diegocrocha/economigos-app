import styled from 'styled-components';
import SelecionadoMenuLateral from "../../assets/SelecionadoMenuLateral.svg";

export const Nav = styled.nav`
    height: 85vh;
    width: 20%;
    margin-top: 5vh;
`;

let active;

export const BackItemNav = styled.div`
    background-color: #e4e4e4;
    /* padding: 0 1rem; */
    padding-bottom: 1rem;
    text-align: center;
    /* background-image: url(${SelecionadoMenuLateral}); */

    &:nth-child(n + 2) {
        padding-top: 0.7rem;
    }

    &:nth-last-child(1) {
        margin-top: 6.5rem;
    }

    a {
        ${props => props.className == "active-nav" ? active = true : active = false};
    }
`

export const ItemNav = styled.li`
    width: 70%;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    list-style: none;
    background-color: ${active ? "#32A287" : "white"};
    color: ${active ? "white" : "#32A287"};
    padding: 0.5rem;

    &:hover {
        background-color: #32A287;
        color: white;
    }
`
export const Ola = styled.h2`
    font-weight: 500;
    margin-bottom: 3rem;
    padding-left: 2rem;
`