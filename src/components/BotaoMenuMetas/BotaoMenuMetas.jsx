import React from 'react'
import * as S from "./style";

export default function BotaoMenuMetas({active, nome, idItemTab, setAtivo, ...props}) {

    function handleSelect() {
        setAtivo(idItemTab)
    }

    return (
        <S.Botao onClick={handleSelect} {...props} active={active == idItemTab ? true : false}>
            {nome}
        </S.Botao>
    )
}
