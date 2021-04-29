import React from 'react'
import * as S from "./style";
import ItemTab from "../../components/ItemTab/ItemTab";
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import SetaProximo from "../../assets/seta-proximo.svg";

export default function Contas() {
    const componente = [
        {
            id: 1,
            nome: "contaC6",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        },
        {
            id: 2,
            nome: "nubank",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        },
        {
            id: 3,
            nome: "Inter",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        },
        {
            id: 4,
            nome: "Santander",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        },
        {
            id: 5,
            nome: "contaC6",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        },
        {
            id: 6,
            nome: "nubank",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        },
        {
            id: 7,
            nome: "Inter",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        },
        {
            id: 8,
            nome: "Santander",
            saldo: "R$450.00",
            gastos: "R$200.00 "
        }
    ]

    let number = 0

    return (
        <S.Contas className="animeRight">
            <S.GroupMenu>
                <S.ImgBtnAdicionar src={BotaoAdicionar} alt="" />
                <S.TabLayout id="TabLayout">
                    {/* {componente.map(comp => (
                        <ItemTab id={number++} active key={comp.id} nome={comp.nome} />
                    ))} */}
                    <ItemTab active nome={"nubank"} />
                    <ItemTab nome={"c6 Bank"} />
                    <ItemTab nome={"Itaú"} />
                    <ItemTab nome={"Inter"} />
                </S.TabLayout>
                <S.ImgBtnProximo src={SetaProximo} alt="" />
            </S.GroupMenu>
            
            <S.InfoItemSelected>
                <S.GroupInfosConta>
                    <p>Saldo da Conta</p>
                    <div style={{color: "#32A287"}}>R$<span>450,93</span></div>
                </S.GroupInfosConta>
                <S.GroupInfosConta>
                    <p>Gasto da Conta</p>
                    <div style={{color: "#A23232"}}>R$<span>250,94</span></div>
                </S.GroupInfosConta>
            </S.InfoItemSelected>

            <S.UltimasAtividades>
                <div className="Titulo">
                    <p>Últimas Atividades</p>
                    <div>Pesquisa</div>
                </div>
                <div className="GroupAtividades">
                    
                </div>
                <div className="DownloadUltimasAtividades">
                    download
                </div>
            </S.UltimasAtividades>
        </S.Contas>
    )
}
