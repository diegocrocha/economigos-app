import React from 'react'
import alimentacaoFundoRedondo from "../../assets/alimentacao-fundo-redondo.svg";
import * as S from "./style";
import {
    parseISO,
    format,
} from 'date-fns';

export default function LancamentoExtrato({ urlImage, data, descricao, tipo, categoria, BackGrey }) {
    return (
        <S.LancamentoExtrato BackGrey={BackGrey}>
            <div className="data">
                <p>{data}</p>
            </div>
            <div className="descricao">
                <p>{descricao}</p>
            </div>
            <div className="tipo">
                <img src={alimentacaoFundoRedondo} alt="" />
            </div>
            <div className="categoria">
                <p>{categoria}</p>
            </div>
        </S.LancamentoExtrato>
    )
}
