import React from 'react'
import * as G from '../../styles/globalComponents'
import * as S from "./style";
import LancamentoExtrato from '../LancamentoExtrato/LancamentoExtrato'

import HeaderExtrato from '../HeaderExtrato/HeaderExtrato'
import Download from '../../assets/download.svg'

export default function ModalExtrato({ color, modal, setModal }) {

    return (
        <>
            {modal &&
                <G.WrapperModal>
                    <G.Modal>
                        <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
                        <S.h1>Extratos</S.h1>
                        <HeaderExtrato />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" BackGrey />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" BackGrey />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" BackGrey />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" BackGrey />
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" />
                        <G.GroupButtonsModalCenter>
                            <G.SimpleButton color={color}>Download <img src={Download} /></G.SimpleButton>
                        </G.GroupButtonsModalCenter>
                    </G.Modal>
                </G.WrapperModal>}
        </>
    )
}
