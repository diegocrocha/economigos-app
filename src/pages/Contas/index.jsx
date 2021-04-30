import React from 'react'
import * as S from "./style";
import ItemTab from "../../components/ItemTab/ItemTab";
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import SetaProximo from "../../assets/seta-proximo.svg";
import Lancamento from "../../components/Lancamento/Lancamento";
import Cifrao from "../../assets/cifrao-fundo-redondo.svg";
import Alimentacao from "../../assets/alimentacao-fundo-redondo.svg";
import Download from "../../assets/download.svg";
import barChart from "../../assets/bar-chart.svg"
import GroupBarChart from '../../components/Charts/GroupBarChart'


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
                    {componente.map(comp => (
                        <ItemTab id={number++} active key={comp.id} nome={comp.nome} />
                    ))}
                </S.TabLayout>
                <S.ImgBtnProximo src={SetaProximo} alt="" />
            </S.GroupMenu>

            <S.InfoItemSelected>
                <S.GroupInfosConta>
                    <p>Saldo da Conta</p>
                    <div style={{ color: "#32A287" }}>R$<span>450,93</span></div>
                </S.GroupInfosConta>
                <S.GroupInfosConta>
                    <p>Gasto da Conta</p>
                    <div style={{ color: "#A23232" }}>R$<span>250,94</span></div>
                </S.GroupInfosConta>
            </S.InfoItemSelected>

            <S.UltimasAtividades>
                <div className="Titulo">
                    <p>Últimas Atividades</p>
                </div>
                <div className="GroupAtividades">
                    <Lancamento urlImage={Cifrao} titulo="Salario" data="20/10/20" valor="2000,00" receita />
                    <Lancamento urlImage={Alimentacao} titulo="Salario" data="20/10/20" valor="300,00" />
                    <Lancamento urlImage={Cifrao} titulo="Salario" data="20/10/20" valor="1500,00" receita />
                    <Lancamento urlImage={Alimentacao} titulo="Salario" data="20/10/20" valor="50,00" />
                    <Lancamento urlImage={Cifrao} titulo="Salario" data="20/10/20" valor="500,00" receita />
                    <Lancamento urlImage={Alimentacao} titulo="Salario" data="20/10/20" valor="800,00" />
                    <Lancamento urlImage={Cifrao} titulo="Salario" data="20/10/20" valor="985,00" receita />
                    <Lancamento urlImage={Alimentacao} titulo="Salario" data="20/10/20" valor="30,00" />
                </div>
                <div className="DownloadUltimasAtividades">
                    <div>
                        Download Histórico
                        <img src={Download} alt="" />
                    </div>
                </div>
            </S.UltimasAtividades>

            <S.BalancoMensalContas>
                <div className="tituloBalanco">
                    <img src={barChart} alt="" />
                    <span className="titleChart">Balanço Mensal</span>
                </div>
                <div className="chartBalanco" >
                    <GroupBarChart/>
                </div>
                <div>

                </div>
            </S.BalancoMensalContas>
        </S.Contas>

    )
}
