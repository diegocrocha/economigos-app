import React from 'react'
import * as S from './style'
import OpcoesAcessoRapido from "../../components/OpcoesAcessoRapido/OpcoesAcessoRapido";

export default function MenuAcessoRapido() {
    return (
        <S.MenuAcessoRapido>
            <OpcoesAcessoRapido nome={"Receitas"} cor={"rgb(50, 162, 135)"} />
            <OpcoesAcessoRapido nome={"Gastos"} cor={"#A23232"} />
            <OpcoesAcessoRapido nome={"Relatórios"} cor={"#312f2f"} />
            <OpcoesAcessoRapido nome={"Extratos"} cor={"#312F2F"} />
        </S.MenuAcessoRapido>
    )
}
