import React from 'react'
import * as S from "./style";
import SaldoTotal from "../../components/SaldoTotal/SaldoTotal"
import GastosPorCategoria from "../../components/GastosPorCategoria/GastosPorCategoria"
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"


function Painel() {
  return (
    <S.Painel className="animeRight">
        <SaldoTotal/>
        <GastosPorCategoria/>
        <BalancoMensal/>
    </S.Painel>
  )
}

export default Painel;