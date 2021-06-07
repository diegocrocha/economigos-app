import styled from "styled-components";

export const MetasFundoRedondo = styled.svg`
    transition: .05s;
    margin: 0% 6.5% 0 4%;

    circle{
        fill: ${props => props.active ? "#32A287" : "white"}
    }

    path{
        fill: ${props => props.active ? "white" : "#32A287"}
    }
`;
