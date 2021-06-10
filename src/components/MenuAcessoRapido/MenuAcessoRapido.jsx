import React from 'react'
import * as S from './style'
import OpcoesAcessoRapido from "../../components/OpcoesAcessoRapido/OpcoesAcessoRapido";
import ModalContabil from '../ModalContabil/ModalContabil';
import ModalExtrato from '../ModalExtrato/ModalExtrato';
import ModalTelegram from '../ModalTelegram/ModalTelegram';

export default function MenuAcessoRapido() {
  const [modalR, setModalR] = React.useState(false);
  const [modalT, setModalT] = React.useState(false);
  const [modalG, setModalG] = React.useState(false);
  const [modalE, setModalE] = React.useState(false)

  return (
    <S.MenuAcessoRapido>
      <OpcoesAcessoRapido click={() => setModalR(true)} nome={"Receitas"} cor={"rgb(50, 162, 135)"} />
      <ModalContabil
        type="RECEITA"
        color="rgb(50, 162, 135)"
        modal={modalR}
        setModal={setModalR} />
      <OpcoesAcessoRapido click={() => setModalG(true)} nome={"Gastos"} cor={"#A23232"} />
      <ModalContabil
        type="GASTO"
        color="#A23232"
        modal={modalG}
        setModal={setModalG} />
      <OpcoesAcessoRapido click={() => setModalT(true)} nome={"Telegram"} cor={" #0088cc"} />
      <ModalTelegram
        modal={modalT}
        setModal={setModalT}
      />
      <OpcoesAcessoRapido click={() => setModalE(true)} nome={"Extratos"} cor={"#312F2F"} />
      <ModalExtrato
        color="#312F2F"
        modal={modalE}
        setModal={setModalE} />
    </S.MenuAcessoRapido>
  )
}
