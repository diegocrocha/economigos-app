import styled from "styled-components";

export const Sair = styled.svg`
    transition: .05s;
    margin: 0% 2.5%;

    circle{
        fill: ${props => props.active ? "#32A287" : "white"}
    }

    path{
        fill: ${props => props.active ? "white" : "#32A287"}
    }
`;
