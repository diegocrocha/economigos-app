import React from 'react'
import * as S from './style'
import IconeDinheiro from "../../components/LogosSVGComponentes/IconeDinheiro/IconeDinheiro";
import IconeRelatorio from "../../components/LogosSVGComponentes/IconeRelatorios/IconeRelatorios";
import IconeExtrato from "../../components/LogosSVGComponentes/IconeExtratos/IconeExtratos";

export default function OpcoesAcessoRapido({ nome, cor }) {
    
    function icone() {
        switch (nome) {
            case "Receitas":
                return <IconeDinheiro cor={"#32A287"}/>;
            case "Gastos":
                return <IconeDinheiro cor={"#A23232"}/>;
            case "Relatórios":
                return <IconeRelatorio/>;
            case "Extratos": 
                return <IconeExtrato/>;
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
