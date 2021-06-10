import styled from "styled-components";

export const TelaCentralApp = styled.div`
    width: 60%;
    height: 90vh;
    background-color: white;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`

export const Pages = styled.div`
    align-content: flex-start;
    width: 70%;
    height: 73.5%;
    margin-left: 15%;
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    @media(max-width: 573px){
        width: 70%;
    }
`
