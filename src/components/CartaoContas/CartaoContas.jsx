import React from 'react'
import { formatCurrency } from '../../utils/utils';
import * as S from "./style";

export default function CartaoContas({nomeConta, saldo, negativo}) {
    return (
        <S.CartaoContas nomeConta={nomeConta} negativo={negativo}>
            <span className="nomeConta">{nomeConta}</span>
            <div className="saldoConta">R$<span>{formatCurrency(Number(saldo))}</span></div>
            <div className="footer"></div>
        </S.CartaoContas>
    )
}
