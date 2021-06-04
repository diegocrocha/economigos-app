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
import api from '../../services/api';
import { useLocation } from 'react-router-dom';


export default function TelaLateralApp({ fechar, contas, gastos, receitas }) {

    const { dados } = React.useContext(UserContext);
    const [lancamentos, setLancamentos] = React.useState([]);
    const [saldo, setSaldo] = React.useState(null);
    const location = useLocation();

    React.useEffect(() => {
        juntarLancamentos(receitas, gastos);
        fetchSaldo()
    }, [dados, gastos, receitas]);

    async function fetchSaldo() {
        if (dados) {
            const response = await api.get(`economigos/usuarios/${dados.usuario.id}`)
            setSaldo(response.data.valorAtual)
        }
    }

    async function juntarLancamentos(receitas, gastos) {
        let lanc = [];

        if (gastos != null && gastos.length > 0) {
            gastos.map(gasto => (lanc.push(gasto)))
        }
        if (receitas != null && receitas.length > 0) {
            receitas.map(receita => (lanc.push(receita)))
        }

        setLancamentos(lanc.sort((a, b) => b.id - a.id));
    }

    return (
        <>
            <S.TelaLateralApp fechar={fechar}>
                {!fechar ?
                    <>
                        <div className="mensagemQuandoFechado">
                            ECONO<span>MIGOS</span>
                        </div>
                        <img className="imagemQuandoFechado" src={GreenPig} alt="" />
                    </>
                    :
                    <>
                        <div className="contas">
                            <div className="titulo">
                                <span>{location.pathname == "/app/painel" ? "Contas" : "Saldo"}</span> 
                                <img style={location.pathname == "/app/painel" ? {display: "block"} : {display: "none"}} src={BotaoAdicionar} alt="" />
                            </div>
                            <Carousel itemsToShow={1} itemPadding={[5, 5, 5, 5]} showArrows={false}>
                                {location.pathname == "/app/painel" ? 
                                    contas.map(conta => (
                                        <CartaoContas nomeConta={conta.apelido} saldo={conta.valorAtual} negativo={Number(conta.valorAtual) < 0 ? true : false} />
                                    ))
                                    :
                                    <CartaoContas nomeConta={"Saldo Total"} saldo={saldo} negativo={Number(saldo) < 0 ? true : false} />
                                }
                            </Carousel>
                            <div className="ultimaAtividades">
                                <div className="titulo"><span>Últimas Atividades</span></div>
                                <div className="listaDeUltimasAtividades" style={lancamentos.length > 6 ? { overflow: "scroll" } : { overflow: "hidden" }}>
                                    {lancamentos.length > 0 ?
                                        lancamentos.map(Lanc => (
                                            Lanc.recebido ?
                                                <Lancamento key={Lanc.id} urlImage={Cifrao} titulo={Lanc.descricao !== "" ? Lanc.descricao : "Receita"} data={Lanc.dataPagamento.replaceAll("-", "/")} valor={Lanc.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} receita />
                                                :
                                                <Lancamento key={Lanc.id} urlImage={Alimentacao} titulo={Lanc.descricao !== "" ? Lanc.descricao : Lanc.categoria} data={Lanc.dataPagamento.replaceAll("-", "/")} valor={Lanc.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} />
                                        ))
                                        :
                                        <GreyPig height="60" mensagem="Você não tem Atividades" />
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
