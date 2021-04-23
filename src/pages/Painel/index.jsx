import React from 'react'
import * as S from './style'
import TelaCentralApp from "../../components/TelaCentralApp/TelaCentralApp";
import TelaLateralApp from "../../components/TelaLateralApp/TelaLateralApp";


function Painel() {
  return (
    <>
      <TelaCentralApp />
      <TelaLateralApp />
    </>
  )
}

export default Painel;