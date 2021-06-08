import React from 'react'
import * as S from './style'
import PorcoEconomigos from "../../assets/porco-economigos-cinza.svg";

export default function GreyPig({height, mensagem, style}) {
    return (
        <>
            <S.GreyPig style={style} height={height} className="porcoCinza" src={PorcoEconomigos} alt="" />
            <S.Text className="textoSemLancamentos">{mensagem}</S.Text>
        </>
    )
}
