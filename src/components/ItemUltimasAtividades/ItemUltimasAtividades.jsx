import React from 'react'
import * as S from "./style";
import alimentacaoFundoRedondo from "../../assets/alimentacao-fundo-redondo.svg";
import { formatDateMain } from '../../utils/utils';

export default function ItemUltimasAtividades({data, descricao, categoria, BackGrey, height}) {

    return (
        <S.Atividade BackGrey={BackGrey} height={height}>
            <div>
                {formatDateMain(data)}
            </div>
            <div>
                {descricao}
            </div>
            <div className="categoria">
                <img src={alimentacaoFundoRedondo} alt=""/>
                {categoria}
            </div>
        </S.Atividade>
    )
}
