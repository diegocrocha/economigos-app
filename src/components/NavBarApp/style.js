import styled from 'styled-components';

export const Nav = styled.nav`
    height: 90vh;
    width: 20%;
`;

export const BackItemNav = styled.div`
    background-color: ${props => props.active ? "white" : "#e4e4e4"};
    text-align: center;
    height: 9.5vh;
    display: flex;
    transition: 0.15s;
    align-items: center;

    &:nth-last-child(1) {
        margin-top: 67%;
    }

    a {
        display: flex;
        width: 100%;
        align-items: center;
    }
`

export const ItemNav = styled.li`
    width: 65%;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    list-style: none;
    transition: 0.05s;
    color: #32A287;
    background-color: white;
    background-color: ${props => props.active ?  "#32A287" : "white"};
    color: ${props => props.active ? "white" : "#32A287"};
    padding: 0.40rem;

`
export const Ola = styled.h2`
    font-weight: 500;
    margin-bottom: 5vh;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 5vh;
    text-align: center;
`