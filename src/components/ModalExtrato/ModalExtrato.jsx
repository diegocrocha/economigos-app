import React from 'react'
import * as G from '../../styles/globalComponents'
import * as S from "./style";
import LancamentoExtrato from '../LancamentoExtrato/LancamentoExtrato'
import "../../styles/style-toasty.css";
import { toast } from 'react-toastify';
import { UserContext } from '../../hooks/UserContext';
import api from '../../services/api';
import HeaderExtrato from '../HeaderExtrato/HeaderExtrato'
import Download from '../../assets/download.svg'

export default function ModalExtrato({ color, modal, setModal }) {

    

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            setModal(false);
        }
    }

    return (
        <>
            {modal &&
                <G.WrapperModal onClick={handleOutsideClick}>
                    <G.Modal>
                        <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
                        <S.h1>Extratos</S.h1>
                        <HeaderExtrato />
                        <S.GroupAtividades>
                                
                        </S.GroupAtividades>
                        <LancamentoExtrato descricao="Coxinha da padaria chique" data="28/05/2021" categoria="Alimento" BackGrey />
                        <G.GroupButtonsModalCenter>
                            <G.SimpleButton color={color}>Download <img src={Download} /></G.SimpleButton>
                        </G.GroupButtonsModalCenter>
                    </G.Modal>
                </G.WrapperModal>
            }
        </>
    )
}
