import React from 'react'
import * as S from "./style";
import Bandeira from "../../assets/bandeira.svg";
import Edit from "../../assets/edit.svg";
import CifraoFundoRedondo from "../../assets/cifrao-fundo-redondo.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { formatCurrency, percentComplete } from '../../utils/utils';

export default function CardMetas({ nome, urlImage, descricao, valorInicial, valorFinal }) {
    return (
        <S.Meta>
            <p className="nome" >{nome}</p>
            <img src={urlImage} alt="" />
            <div className="totalPercent">
                <p className="valorMeta">R${formatCurrency(Number(valorFinal))}</p>
                <p className="porcentagem">{percentComplete(Number(valorInicial), Number(valorFinal))}%</p>
            </div>
            <div className="progresso">
                <div className="textBarra">
                    <p className="textProgress">R${formatCurrency(Number(valorInicial))} de R${formatCurrency(Number(valorFinal))}</p>
                    <ProgressBar
                      completed={percentComplete(Number(valorInicial), Number(valorFinal))}
                      height="10px"
                      bgColor="#32A287"
                      labelSize="0px"
                      labelAlignment="center"/>
                </div>
                <img src={Bandeira} alt="" />
            </div>
            <div className="alteracoes">
                <div>
                    <img src={CifraoFundoRedondo} alt="" />
                    <p>Atualizar</p>
                </div>
                <div>
                    <img src={Edit} alt="" />
                    <p>Editar</p>
                </div>
            </div>
        </S.Meta>
    )
}
