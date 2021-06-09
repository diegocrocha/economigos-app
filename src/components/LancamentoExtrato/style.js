import styled from 'styled-components';

export const LancamentoExtrato = styled.div`
    margin: 0px 1%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 45px;
    grid-gap: 10px;
    grid-template-areas: "data descricao tipo categoria";
    background-color: ${props => props.BackGrey ? "#E4E4E4" : "none"};

    div{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }

    .data{
        grid-area: data;

        p{
            color: #312F2F;
            width: 100%;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.7rem;
        }
    }

    .descricao{
        grid-area: descricao;

        p{
            color: #312F2F;
            width: 100%;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.7rem;
        }
    }

    .tipo{
        grid-area: tipo;

        img{
            height: 70%;
            border-radius: 50%;
        }
    }

    .categoria{
        grid-area: categoria;

        p{
            color: #312F2F;
            width: 100%;
            overflow: hidden;
            font-weight: 600;
            font-size: 0.7rem;
        }
    }
`;
