import React from 'react'
import * as S from './style'
import { UserContext } from '../../hooks/UserContext'
import GreenPig from "../../assets/green-pig.svg";
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import Carousel from 'react-elastic-carousel'
import CartaoContas from '../CartaoContas/CartaoContas';
import Lancamento from "../../components/Lancamento/Lancamento";
import Cifrao from "../../assets/cifrao-fundo-redondo.svg";
import Alimentacao from "../../assets/alimentacao-fundo-redondo.svg";
import GreyPig from '../GreyPig/GreyPig';
import GreyPigFull from '../../assets/grey-pig-full.svg'
import api from '../../services/api';
import { useLocation } from 'react-router-dom';
import { formatCurrency, formatDateMain } from '../../utils/utils';


export default function TelaLateralApp({ fechar, contas, lancamentos }) {

    const { dados } = React.useContext(UserContext);
    const [saldo, setSaldo] = React.useState(null);
    const location = useLocation();

    React.useEffect(() => {
        fetchSaldo()
    }, [dados, lancamentos]);

    async function fetchSaldo() {
        if (dados) {
            const token = dados.jwt;
            const response = await api.get(`economigos/usuarios/this`, {headers: {
                'Authorization': `Bearer ${token}`
            }})
            setSaldo(response.data.valorAtual)
        }
    }

    return (
        <>
            <S.TelaLateralApp fechar={fechar}>
                {!fechar ?
                    <>
                        <div className="mensagemQuandoFechado">
                            Econo<span>migos</span>
                        </div>
                        <img className="imagemQuandoFechado" src={GreyPigFull} alt="" />
                    </>
                    :
                    <>
                        <div className="contas">
                            <div className="titulo">
                                <span>{location.pathname == "/app/painel" ? "Contas" : "Saldo"}</span>
                                <img style={location.pathname == "/app/painel" ? { display: "block" } : { display: "none" }} src={BotaoAdicionar} alt="" />
                            </div>
                            {location.pathname == "/app/painel" && contas ?
                                (<Carousel itemsToShow={1} itemPadding={[5, 5, 5, 5]} showArrows={false}>
                                    {contas.map(conta => (
                                        <CartaoContas key={conta.id} nomeConta={conta.apelido} saldo={conta.valorAtual} negativo={Number(conta.valorAtual) < 0 ? true : false} />
                                    ))}
                                </Carousel>)
                                :
                                <CartaoContas nomeConta={"Saldo Total"} saldo={saldo} negativo={Number(saldo) < 0 ? true : false} />}
                            <div className="ultimaAtividades">
                                <div className="titulo"><span>Últimas Atividades</span></div>
                                <div className="listaDeUltimasAtividades" style={lancamentos && lancamentos.length > 4 ? { overflowY: "scroll" } : { overflow: "hidden" }}>
                                    {lancamentos && lancamentos.length > 0 ?
                                        lancamentos.sort((a, b) => b.id - a.id).map(lanc => (
                                            lanc.tipo == "Renda" ?
                                                <Lancamento
                                                    key={lanc.descricao}
                                                    urlImage={Cifrao}
                                                    titulo={lanc.descricao !== "" ? lanc.descricao : "Renda"}
                                                    data={formatDateMain(lanc.data)}
                                                    valor={formatCurrency(lanc.valor)} receita />
                                                :
                                                <Lancamento
                                                    key={lanc.id}
                                                    urlImage={Alimentacao}
                                                    titulo={lanc.descricao !== "" ? lanc.descricao : "Gasto"}
                                                    data={formatDateMain(lanc.data)}
                                                    valor={formatCurrency(lanc.valor)} />
                                        ))
                                        :
                                        <GreyPig style={{ marginTop: "35px" }} height="40" mensagem="Você não possui atividades!" />
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                }
            </S.TelaLateralApp>
        </>
    )
}
