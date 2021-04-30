import styled from "styled-components";
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria"

export const DescricaoBalancoMensal = styled(ItemListaCategoria)`
    width: 50%;
`;

export const BalancoMensal = styled.div`
    height: 59%;
    width: 100%;
    margin-top: 1%;
    border: 3px solid #e4e4e4e4;
    border-radius: 14px;
    display: flex;
    flex-wrap: wrap;

    div{
        display: flex;
        flex-wrap:wrap;
        width: 50%;
        height: 20%;
        align-items: center;

        img{
            height: calc( 20px + (12 - 6) * ( (100vw - 400px) / ( 800 - 400) ));
            margin: 0% 2%;
        }

        .titleChart{
            font-size: calc( 12px + (12 - 6) * ( (100vw - 400px) / ( 800 - 400) ));
            font-weight: 600;
            color: #32A287;
        }
    }

    ul{
        width: 50%;
        height: 20%;
        align-items: center;
        display: flex;

        div{
            width: 20px;
            height: 20px;
        }
    }
    
    .barChart{
        height: 75%;
        width: 100%;
    }

`;