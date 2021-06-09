import styled from "styled-components";
import IconeProximo from "../../assets/iconeProximo.svg";



export const TelaLateralApp = styled.div`
    width: 19.5%;
    height: 90vh;
    background-color: ${props => props.fechar ? "white" : "transparent"};
    border-top-left-radius: 14px;
    margin-left: 0.5%;
    transition: all 1s;

    .mensagemQuandoFechado{
        width: 164px;
        height: 14%;
        margin: auto;
        margin-top: 58%;
        word-break: break-all;
        text-align: center;
        line-height: 79%;
        font-size: 45px;
        font-weight: 700;
        color: #C8CBD0;

        span{
            color: #C8CBD0;
        }
    }

    .imagemQuandoFechado{
        margin: auto;
        height: 22%;
    }

    .contas{
        width: 100%;
        height: 94%;
        margin-top: 14%;

        .titulo{
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: space-between;
            align-items: center;
            width: 85%;
            margin-left: 7.5%;

            span{
                font-size: 1.4rem;
                font-weight: 600;
                color: #32A287;
            }

            img{
                height: 20px;
            }
        }

        .rec-pagination{
            margin-top: 0px;
        }

        .rec-dot_active{
            background-color: #32A287;
            box-shadow: 0 0 1px 3px #32A287;
        }

        .ultimaAtividades{
            margin-top: 20px;
            height: 59%;

            .listaDeUltimasAtividades{
                height: 86%;

                &::-webkit-scrollbar {
                    width: 5px;
                }

                &::-webkit-scrollbar-track {
                    background-image: linear-gradient(-90deg, #C4C4C4 6%, #C4C4C4 8%, transparent 83%);
                    border-radius: 7px;        /* color of the tracking area */
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #C4C4C4;    /* color of the scroll thumb */
                    border-radius: 20px;       /* roundness of the scroll thumb */
                    border: 3px solid #C4C4C4;  /* creates padding around scroll thumb */
                }
            }
        }
    }
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