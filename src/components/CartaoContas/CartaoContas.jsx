import React from 'react'
import * as S from "./style";

export default function CartaoContas({nomeConta, saldo, negativo}) {
    return (
        <S.CartaoContas nomeConta={nomeConta} negativo={negativo}>
            <span className="nomeConta">{nomeConta}</span>
            <div className="saldoConta">R$<span>{Number(saldo).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span></div>
            <div className="footer"></div>
        </S.CartaoContas>
    )
}
