import styled from 'styled-components';

export const Nav = styled.nav`
    height: 100%;
    width: 20%;
    padding-top: 8rem;
`;

let active = false;

export const BackItemNav = styled.div`
    background-color: ${props => props.active ? "white" : "#e4e4e4"};
    padding: 0 1rem;
    padding-bottom: 1rem;
    text-align: center;

    &:nth-child(n + 2) {
        padding-top: 0.7rem;
    }
`

export const ItemNav = styled.li`
    width: 70%;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    list-style: none;
    background-color: ${props => props.active ? "#32A287" : "white"};
    color: ${props => props.active ? "white" : "#32A287"};
    padding: 0.5rem;

    &:hover {
        background-color: #32A287;
        color: white;
    }
`
