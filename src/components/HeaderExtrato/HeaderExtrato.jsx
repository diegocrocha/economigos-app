import React from 'react'
import * as S from "./style";

export default function HeaderExtrato () {
    return (
        <S.HeaderExtrato>
            <div className="data">
            <p>Data</p>
            </div>
            <div className="descricao">
            <p>Descrição</p>
            </div>
            <div className="tipo">
            <p>Tipo</p>
            </div>
            <div className="categoria">
            <p>Categoria</p>
            </div>
        </S.HeaderExtrato>
    )
}
