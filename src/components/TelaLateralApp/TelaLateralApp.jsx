import React from 'react'
import * as S from './style'
import GreenPig from "../../assets/green-pig.svg";
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import Carousel from 'react-elastic-carousel'
import CartaoContas from '../CartaoContas/CartaoContas';
import Lancamento from "../../components/Lancamento/Lancamento";
import Cifrao from "../../assets/cifrao-fundo-redondo.svg";
import Alimentacao from "../../assets/alimentacao-fundo-redondo.svg";

export default function TelaLateralApp({ fechar, contas, gastos, receitas }) {

    // const [lancamentos, setLancamentos] = React.useState([]);

    // function juntarLancamentos(receitas, gastos) {
    //     let lanc = [];

    //     receitas.map(receita => (lanc.push(receita)))
    //     gastos.map(gasto => (lanc.push(gasto)))

    //     setLancamentos(lanc);
    // }

    // juntarLancamentos(receitas, gastos);

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
                            <div className="titulo"><span>Contas</span> <img src={BotaoAdicionar} alt="" /></div>
                            <Carousel itemsToShow={1} itemPadding={[5, 5, 5, 5]} showArrows={false}>
                                {contas.map(conta => (
                                    <CartaoContas nomeConta={conta.apelido} saldo={conta.valorAtual} />
                                ))}
                            </Carousel>
                            <div className="ultimaAtividades">
                                <div className="titulo"><span>Últimas Atividades</span></div>
                                <div className="listaDeUltimasAtividades">
                                    {/* {lancamentos.map(Lanc => (
                                        Lanc.recebido ?
                                        <Lancamento key={Lanc.id} urlImage={Cifrao} titulo={Lanc.descricao !== "" ? Lanc.descricao : "Receita"} data={Lanc.dataPagamento.replaceAll("-", "/")} valor={Lanc.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} receita />
                                        :
                                        <Lancamento key={Lanc.id} urlImage={Alimentacao} titulo={Lanc.descricao !== "" ? Lanc.descricao : Lanc.categoria} data={Lanc.dataPagamento.replaceAll("-", "/")} valor={Lanc.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })} />
                                    ))} */}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </S.TelaLateralApp>
        </>
    )
}
