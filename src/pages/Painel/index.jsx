import React from 'react'
import * as S from './style'
import TelaCentralApp from "../../components/TelaCentralApp/TelaCentralApp";
import TelaLateralApp from "../../components/TelaLateralApp/TelaLateralApp";
import SaldoTotal from "../../components/SaldoTotal/SaldoTotal"
import GastosPorCategoria from "../../components/GastosPorCategoria/GastosPorCategoria"
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"


function Painel() {
  return (
    <>
      <TelaCentralApp>
        <SaldoTotal/>
        <GastosPorCategoria/>
        <BalancoMensal/>
      </TelaCentralApp>
      
      <TelaLateralApp />
    </>
  )
}

export default Painel;