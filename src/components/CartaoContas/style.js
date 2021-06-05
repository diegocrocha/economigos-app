import styled from 'styled-components';

export const CartaoContas = styled.div`
    width: ${props => props.nomeConta == "Saldo Total" ? "90%" : "100%"};
    margin-left: ${props => props.nomeConta == "Saldo Total" ? "5%" : "0%"};
    height: 130px;
    border: 2px solid ${props => props.negativo ? "rgb(162, 50, 50)" : "#32A287"};
    padding: 10px;
    border-radius: 7px;
    box-shadow: 0px 1px 5px 1px grey;

    .saldoConta{
        width: 100%;
        height: 40%;
        text-align: center;
        font-weight: 600;
        color: ${props => props.negativo ? "rgb(162, 50, 50)" : "#32A287"};
        font-size: 0.8rem;
        margin-top: 6%;
    }

    span{
        font-weight: 600;
        color: ${props => props.negativo ? "rgb(162, 50, 50)" : "#32A287"};
        font-size: 1.2rem;
    }
`;
