import styled from "styled-components";
import IconeProximo from "../../assets/iconeProximo.svg";



export const TelaLateralApp = styled.div`
    width: 19.5%;
    height: 90vh;
    background-color: white;
    border-top-left-radius: 14px;
    margin-left: 0.5%;
    transition: all 1s;
`

export const BtnFecharTela = styled.button`
    height: 35px;
    width: 35px;
    position: absolute;
    top: 8%;
    border-radius: 50%;
    border: none;
    background-size: 135%;
    transition: box-shadow 0.5s;
    background-image: url("${IconeProximo}");
    background-position: center center;

    &:hover{
        cursor:pointer;
        box-shadow: 0px 0px 7px 0px grey;
    };
`