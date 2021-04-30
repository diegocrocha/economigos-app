import React from 'react'
import * as S from './style'
import IconeDinheiro from "../../components/LogosSVGComponentes/IconeDinheiro/IconeDinheiro";
import IconeRelatorio from "../../components/LogosSVGComponentes/IconeRelatorios/IconeRelatorios";
import IconeExtrato from "../../components/LogosSVGComponentes/IconeExtratos/IconeExtratos";

export default function OpcoesAcessoRapido({ nome, cor }) {
    
    function icone() {
        switch (nome) {
            case "Receitas":
                return <IconeDinheiro cor={cor}/>;
            case "Gastos":
                return <IconeDinheiro cor={cor}/>;
            case "Relatórios":
                return <IconeRelatorio cor={cor}/>;
            case "Extratos": 
                return <IconeExtrato cor={cor}/>;
        }
    }

    return (
        <S.OpcoesAcessoRapido color={cor}>
            {icone()}
            <S.NomeOpcaoDinheiro>
                {nome}
            </S.NomeOpcaoDinheiro>
        </S.OpcoesAcessoRapido>
    )
}
