import React from 'react';
import * as G from '../../styles/globalComponents';
import * as S from "./style.js";
import CelularTelegram from "../../assets/celular-telegram.svg";
import PesquisarTelegram from "../../assets/pesquisar-telegram.svg";
import PorcoFundoVerde from "../../assets/porco-fundo-verde.svg";

export default function ModalTelegram({ titulo, modal, setModal }) {

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
            <h1>Telegram</h1>
            <S.GroupInfosTelegram>
              <div>
                <img src={PesquisarTelegram} alt="" />
                <p>Abra o <b>Telegram</b> e pesquise por <b>Economigos</b>.</p>
              </div>
              <div style={{textAlign:"end", backgroundColor:"white"}}>
                <p>Abra o <b>Telegram</b> e pesquise por <b>Economigos</b>.</p>
                <img src={CelularTelegram} alt="" style={{marginLeft:"5%"}}/>
              </div>
              <div>
                <img src={PorcoFundoVerde} alt="" />
                <p>Abra o <b>Telegram</b> e pesquise por <b>Economigos</b>.</p>
              </div>
            </S.GroupInfosTelegram>
            <S.BotaoTelegram>
              <G.Button color={"rgb(50,162,135)"} onClick={() => window.location.href="https://web.telegram.org/#/login"}>Conhecer</G.Button>
            </S.BotaoTelegram>
          </G.Modal>
        </G.WrapperModal>
      }
    </>
  )
}
