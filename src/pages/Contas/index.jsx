import React from 'react'
import api from "../../services/api";
import { UserContext } from '../../hooks/UserContext'
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
import * as G from "../../styles/globalComponents";
import ItemListaCategoria from "../../components/ItemListaCategoria/ItemListaCategoria";

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

    const {dados} = React.useContext(UserContext);
    const [ativo, setAtivo] = React.useState(null);
    const [contas, setContas] = React.useState(null);
    const [detalheConta, setDetalheConta] = React.useState(null);
    
    React.useEffect(() => {
        fetchContas();
    }, []);

    async function fetchContas() {
        if (dados) {
            const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
            setContas(response.data.contaDtos);
            setAtivo(contas[0].id)
            console.log(response.data.contaDtos);
            fetchData()
        }
    }
    
    async function fetchData() {
        if (dados) {
            const response = await api.get(`/economigos/contas/${ativo}`);
            setDetalheConta(response.data.contaDtos);
            console.log(response.data.contaDtos);
        }
    }


    return (
        <S.Contas className="animeRight">
            <G.GroupMenu>
                <G.ImgBtnAdicionar src={BotaoAdicionar} alt="" />
                <G.TabLayout id="TabLayout">
                    {contas && contas.map(conta => (
                        <ItemTab setAtivo={setAtivo} active={ativo} key={conta.id} idItemTab={conta.id} nome={conta.apelido} />
                    ))}
                </G.TabLayout>
                <G.ImgBtnProximo src={SetaProximo} alt="" />
            </G.GroupMenu>

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
                    <GroupBarChart
                        dataReceitas={[{ x: "Janeiro", y: 400 },
                        { x: "Fevereiro", y: 120.0 },
                        { x: "Março", y: 502.0 }
                        ]}
                        dataGastos={[{ x: "Janeiro", y: 110.0 },
                        { x: "Fevereiro", y: 240.0 },
                        { x: "Março", y: 200.0 },
                        ]}
                    />
                </div>
                <div className="chartDescription">
                    <ItemListaCategoria nome="Receitas" cor="#32A287" />
                    <ItemListaCategoria nome="Gastos" cor="#A23232" />
                </div>
            </S.BalancoMensalContas>
        </S.Contas>

    )
}
