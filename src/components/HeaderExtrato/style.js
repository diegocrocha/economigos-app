import styled from 'styled-components';

export const HeaderExtrato = styled.div`
    margin: 30px 5% 10px 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 45px;
    grid-gap: 10px;
    grid-template-areas: "data descricao tipo categoria";

    div{
        vertical-align: middle;
        text-align: center;
    };

    .data{
        grid-area: data;

        p{
            color: #312F2F;
            width: 100%;
            opacity: 0.85;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.85rem;
        }
    };

    .descricao{
        grid-area: descricao;

        p{
            color: #312F2F;
            width: 100%;
            opacity: 0.85;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.85rem;
        }
    };

    .tipo{
        grid-area: tipo;

        p{
            color: #312F2F;
            width: 100%;
            opacity: 0.85;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.85rem;
        }
    };

    .categoria{
        grid-area: categoria;
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: 45px;
        grid-template-areas: "imagem categoria";

        p{
            grid-area: categoria;
            color: #312F2F;
            width: 100%;
            opacity: 0.85;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.85rem;
        }
    }
`;
