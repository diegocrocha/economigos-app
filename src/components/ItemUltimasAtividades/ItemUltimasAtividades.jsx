import React from 'react'
import * as S from "./style";
import { 
    parseISO, 
    format,
} from 'date-fns';

export default function ItemUltimasAtividades({data, descricao, categoria, BackGrey, height}) {

    function formatData(data) {
        return  format(
            parseISO(data), 
            "dd'/'MM'/'yyyy",
          );
    }

    return (
        <S.Atividade BackGrey={BackGrey} height={height}>
        {/* <S.Atividade height={height}> */}
            <div>
                {formatData(data)}
            </div>
            <div>
                {descricao}
            </div>
            <div>
                {categoria}
            </div>
        </S.Atividade>
    )
}
