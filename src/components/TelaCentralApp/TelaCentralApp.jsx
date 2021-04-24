import React from 'react'
import * as S from './style'
import MenuAcessoRapido from "../../components/MenuAcessoRapido/MenuAcessoRapido";

export default function TelaCentralApp({children}) {
    return (
        <>
        <S.TelaCentralApp>
            <MenuAcessoRapido/>
            <S.Pages>
                {children}
            </S.Pages>
        </S.TelaCentralApp>
        </>
    )
}
