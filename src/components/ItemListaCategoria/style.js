import styled from "styled-components";

export const ItemListaCategoria = styled.li`
    width: 100%;
    height: 20%;
    margin: 5% 0%;
    align-items: center;
    font-family: 'Poppins';
    display: grid;
    grid-template-columns: 0.4fr 1fr;

    div{
        width: 20px;
        height: 20px;
        border-radius: 4px;
        margin: 0% 10px;
        background-color: ${props => props.color}
    }

    span{
        font-weight: 600;
        color: ${props => props.color}
    }


`;