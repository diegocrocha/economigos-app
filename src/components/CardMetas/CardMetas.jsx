import React from 'react'
import * as S from "./style";
import Bandeira from "../../assets/bandeira.svg";
import Edit from "../../assets/edit.svg";
import CifraoFundoRedondo from "../../assets/cifrao-fundo-redondo.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import ModalMetas from "../../components/ModalMetas/ModalMetas";

export default function CardMetas({ idMeta, nome, urlImage, descricao, valorInicial, valorFinal}) {

    const [modalEdit, setModalEdit] = React.useState(false)

    return (
        <S.Meta>
            {modalEdit && <ModalMetas edit idMeta={idMeta} setModal={setModalEdit} titulo={"Atualizar Meta"}/>}
            <p className="nome" >{nome}</p>
            <img src={urlImage} alt="" />
            <div className="totalPercent">
                <p className="valorMeta">R${Number(valorFinal).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                <p className="porcentagem">{((Number(valorInicial) * 100) / Number(valorFinal)).toFixed(0)}%</p>
            </div>
            <div className="progresso">
                <div className="textBarra">
                    <p className="textProgress">R${Number(valorInicial).toLocaleString('pt-br', { minimumFractionDigits: 2 })} de R${Number(valorFinal).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                    <ProgressBar completed={((Number(valorInicial) * 100) / Number(valorFinal)).toFixed(0)} height="10px" bgColor="#32A287" labelSize="0px" labelAlignment="center"/>
                </div>
                <img src={Bandeira} alt="" />
            </div>
            <div className="alteracoes">
                <div onClick={() => setModalEdit(true)}>
                    <img src={CifraoFundoRedondo} alt="" />
                    <p>Atualizar</p>
                </div>
            </div>
        </S.Meta>
    )
}
