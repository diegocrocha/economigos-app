import React from 'react'
import SaldoTotal from "../../components/SaldoTotal/SaldoTotal"
import GastosPorCategoria from "../../components/GastosPorCategoria/GastosPorCategoria"
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"


function Painel() {
  return (
    <>
        <SaldoTotal/>
        <GastosPorCategoria/>
        <BalancoMensal/>
    </>
  )
}

export default Painel;