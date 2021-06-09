import React from 'react'
import alimentacaoFundoRedondo from "../../assets/alimentacao-fundo-redondo.svg";
import * as S from "./style";
import { 
    parseISO, 
    format,
} from 'date-fns';

export default function LancamentoExtrato ({urlImage, data, descricao, tipo, categoria, BackGrey}) {

    function formatData(data) {
        return  format(
            parseISO(data), 
            "dd'/'MM'/'yyyy",
          );
    }

    function verifyTipo(tipo) {
        var imagemTipo = ((tipo = "gasto") ?  "../../assets/alimentacao-fundo-redondo.svg" : "../../assets/alimentacao-fundo-redondo.svg");
        return  imagemTipo;
    }

    return (
        <S.LancamentoExtrato BackGrey={BackGrey}>
            <div className="data">
            <p>{data}</p>
            </div>
            <div className="descricao">
            <p>{descricao}</p>
            </div>
            <div className="tipo">
            <img src={alimentacaoFundoRedondo} alt=""/>
            </div>
            <div className="categoria">
            <p>{categoria}</p>
            </div>
        </S.LancamentoExtrato>
    )
}
