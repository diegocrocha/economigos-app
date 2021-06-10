import React from 'react'
import api from "../../services/api";
import filesApi from '../../services/filesApi';
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
import GreyPig from "../../components/GreyPig/GreyPig";
import ContaC6 from '../../assets/tmp/conta-c6.svg'
import Head from '../../components/Helper/Head'
import { formatCurrency, formatDateMain } from '../../utils/utils';
import { getBank } from '../../services/banks';
import ModalContas from '../../components/ModalContas/ModalContas';
import Edit from "../../assets/edit.svg"
import Tooltip from '../../components/Helper/Tooltip/Tooltip';

export default function Contas() {

    const { dados } = React.useContext(UserContext);
    const [ativo, setAtivo] = React.useState(null);
    const [contas, setContas] = React.useState([]);
    const [contasT, setContasT] = React.useState(null)
    const [detalheConta, setDetalheConta] = React.useState(null);
    const [listaOrdenada, setListaOrdenada] = React.useState([]);
    const [mesesAnterioresReceitas, setMesesAnterioresReceitas] = React.useState([]);
    const [mesesAnterioresGastos, setMesesAnterioresGastos] = React.useState([]);
    const [modal, setModal] = React.useState(false)
    const [modalEdit, setModalEdit] = React.useState(false)

    React.useEffect(() => {
        fetchContas();
    }, [dados]);

    React.useEffect(() => {
      function generateJson() {
        let accounts = []
        contas.map(conta => {
          let bank = getBank(conta.banco)
          bank.idB = conta.id
          bank.apelido = conta.apelido
          accounts.push(bank)
        })
        setContasT(accounts)
      }
        if (contas.length > 0) {
            setAtivo(contas[0].id)
            generateJson()
        }
    }, [contas]);

    React.useEffect(() => {
        fetchData();
    }, [ativo, dados]);

    React.useEffect(() => {
        ordenarLista();
        fetchDataDash();
    }, [detalheConta, ativo]);

    async function fetchContas() {
        if (dados) {
            const response = await api.get(`/economigos/contas?idUsuario=${dados.usuario.id}`);
            setContas(await response.data);
        }
    }

    async function fetchData() {
        if (ativo) {
            const response = await api.get(`/economigos/contas/${ativo}?idUsuario=${dados.usuario.id}`);
            setDetalheConta(response.data);
        }
    }

    async function fetchDataDash() {
        if (ativo) {
            const response = await api.get(`economigos/contas/${ativo}/ultimos-meses`);
            ultimosMeses(response)
        }
    }

    async function fetchExport() {
        if (dados) {
            window.open(`economigos/files/export/${ativo}?idUsuario=${dados.usuario.id}&csvFile=false`)
            // const response = await filesApi.get(`economigos/files/export/${ativo}?idUsuario=${dados.usuario.id}&csvFile=false`)
        }
    }
    
    function ultimosMeses(response) {
        let gastos = []
        let receitas = []
        let gastosComValorZero = 0;
        let receitasComValorZero = 0;

        for (let j = response.data[0].valorMensalDtos.length - 1; j >= 0; j--) {
            gastos.push({
                x: response.data[0].valorMensalDtos[j].mes,
                y: response.data[0].valorMensalDtos[j].valor
            })
            response.data[0].valorMensalDtos[j].valor == 0 ? gastosComValorZero++ : gastosComValorZero;
        }
        for (let j = response.data[1].valorMensalDtos.length - 1; j >= 0; j--) {
            receitas.push({
                x: response.data[1].valorMensalDtos[j].mes,
                y: response.data[1].valorMensalDtos[j].valor
            })
            response.data[1].valorMensalDtos[j].valor == 0 ? receitasComValorZero++ : receitasComValorZero;
        }

        if (gastosComValorZero == 3) {
            gastos = 0
        }
        if (receitasComValorZero == 3) {
            receitas = 0
        }

        setMesesAnterioresReceitas(receitas);
        setMesesAnterioresGastos(gastos);
    }

    function ordenarLista() {
        let listaOrdenada = [];

        if (detalheConta != null) {
            for (const renda in detalheConta.rendas) {
                listaOrdenada.push(detalheConta.rendas[Number(renda)]);
            }
            for (const gasto in detalheConta.gastos) {
                listaOrdenada.push(detalheConta.gastos[Number(gasto)]);
            }
        }

        setListaOrdenada(listaOrdenada.sort((a, b) => b.id - a.id));
    }

    return (
        <S.Contas className="animeRight">
            {modal && <ModalContas setModal={setModal} titulo={"Nova Conta"} />}
            {modalEdit && <ModalContas idConta={ativo} setModal={setModalEdit} titulo={"Atualizar Conta"} edit/>}
            <Head title="Contas" />
            <G.GroupMenu>
                <G.ImgBtnAdicionar src={BotaoAdicionar} onClick={() => setModal(true)} alt="" />
                <G.ImgBtnAnterior onClick={() => document.getElementById("TabLayout").scrollLeft -= 80} src={SetaProximo} alt="" />
                <G.TabLayout id="TabLayout">
                    {contasT && contasT.map(conta => (
                        <ItemTab
                          imgItem={conta.image.default}
                          setAtivo={setAtivo}
                          active={ativo}
                          key={conta.idB}
                          idItemTab={conta.idB}
                          nome={conta.apelido} />
                    ))}
                </G.TabLayout>
                <G.ImgBtnProximo onClick={() => document.getElementById("TabLayout").scrollLeft += 80} src={SetaProximo} alt="" />
            </G.GroupMenu>

            <S.InfoItemSelected>
                <S.GroupInfosContaCartao>
                    <p>Saldo da Conta</p>
                    <div style={{ color: (detalheConta && detalheConta.valorAtual >= 0 ? "#32A287" : "#A23232") }}>
                        R$<span>{detalheConta ? formatCurrency(detalheConta.valorAtual) : "0,00"}</span></div>
                </S.GroupInfosContaCartao>
                <S.GroupInfosContaCartao>
                    <p>Gasto da Conta</p>
                    <div style={{ color: "#A23232" }}>R$<span>{detalheConta ? formatCurrency(detalheConta.totalGastos) : "0,00"}</span></div>
                </S.GroupInfosContaCartao>
                <img src={Edit} alt="" className="buttonEdit" onClick={() => setModalEdit(true)}/>
            </S.InfoItemSelected>

            <S.UltimasAtividades>
                <div className="Titulo">
                    <p>Últimas Atividades</p>
                </div>

                {detalheConta == null || listaOrdenada.length == 0 ?
                    (
                        <S.GroupAtividades style={{ overflowY: "none" }}>
                            <GreyPig mensagem="Você não possui atividades registradas!" />
                        </S.GroupAtividades>
                    )
                    :
                    (
                        <>
                            <S.GroupAtividades style={{ overflowY: "scroll" }}>
                                {listaOrdenada.map(itemList => (
                                    itemList.recebido ?
                                        <Lancamento
                                            key={itemList.id}
                                            urlImage={Cifrao}
                                            titulo={itemList.descricao !== "" ? itemList.descricao : "Renda"}
                                            data={formatDateMain(itemList.dataPagamento)}
                                            valor={formatCurrency(itemList.valor)}
                                            receita />
                                        :
                                        <Lancamento
                                            key={itemList.id}
                                            urlImage={Alimentacao}
                                            titulo={itemList.descricao !== "" ? itemList.descricao : "Gasto"}
                                            data={formatDateMain(itemList.dataPagamento)}
                                            valor={formatCurrency(itemList.valor)} />
                                ))}
                            </S.GroupAtividades>
                            <div className="DownloadUltimasAtividades">
                                <div onClick={fetchExport}>
                                    Download Histórico
                                    <img src={Download} alt="" />
                                </div>
                            </div>
                        </>
                    )
                }
            </S.UltimasAtividades>

            <S.BalancoMensalContas>
                <div className="tituloBalanco">
                    <img src={barChart} alt="" />
                    <span className="titleChart">Balanço Mensal</span>
                </div>
                {detalheConta == null || listaOrdenada.length == 0 ?
                    (
                        <>
                            <S.GroupAtividades style={{ overflowY: "none" }}>
                                <GreyPig mensagem="Você não possui lançamentos registrados!" />
                            </S.GroupAtividades>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="chartBalanco" >
                                <GroupBarChart
                                    dataReceitas={mesesAnterioresReceitas}
                                    dataGastos={mesesAnterioresGastos}
                                />
                            </div>
                            <div className="chartDescription">
                                <ItemListaCategoria nome="Receitas" cor="#32A287" />
                                <ItemListaCategoria nome="Gastos" cor="#A23232" />
                            </div>
                        </>
                    )
                }
            </S.BalancoMensalContas>
        </S.Contas>

    )
}
