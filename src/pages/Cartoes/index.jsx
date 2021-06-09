import React from 'react'
import * as G from '../../styles/globalComponents'
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import ItemTab from '../../components/ItemTab/ItemTab';
import SetaProximo from "../../assets/seta-proximo.svg";
import * as S from './style'
import { UserContext } from '../../hooks/UserContext';
import Logo from '../../assets/logo-escuro.svg'
import api from '../../services/api';
import ItemUltimasAtividades from '../../components/ItemUltimasAtividades/ItemUltimasAtividades';
import GreyPig from '../../components/GreyPig/GreyPig';
import Head from '../../components/Helper/Head'
import ModalCartoes from '../../components/ModalCartoes/ModalCartoes';
import { formatCurrency, formatDateFull } from '../../utils/utils';

export default function Cartoes() {
    const [modal, setModal] = React.useState(false)
    const { dados } = React.useContext(UserContext)
    const [ativo, setAtivo] = React.useState(null)
    const [cartoes, setCartoes] = React.useState([])
    const [detalheCartao, setDetalheCartao] = React.useState(null);
    let counts = 0;

    React.useEffect(() => {
        fetchCartoes()
    }, [dados])

    React.useEffect(() => {
        if (cartoes.length > 0) {
            setAtivo(cartoes[0].id)
        }
    }, [cartoes]);

    React.useEffect(() => {
        fetchData();
    }, [ativo]);

    async function fetchCartoes() {
        if (dados) {
            const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
            setCartoes(response.data.cartaoDtos);
        }
    }

    async function fetchData() {
        if (ativo) {
            const response = await api.get(`/economigos/cartoes/${ativo}`);
            setDetalheCartao(response.data);
        }
    }

    return (
      <>
      {!ativo && <ModalSemCartao setModal={setModal} />}
      {modal &&
       <ModalCartoes
        modal={modal}
        setModal={setModal} />
       }
      <S.CartoesWrapper className={!ativo ? "animeRight blur" : "animeRight"}>
          <Head title="Cartões"/>
            <G.GroupMenu style={{height: "23%"}}>
                <G.ImgBtnAdicionar src={BotaoAdicionar} onClick={() => setModal(true)} alt="" />
                <G.ImgBtnAnterior onClick={() => document.getElementById("TabLayout").scrollLeft -= 80} src={SetaProximo} alt="" />
                <G.TabLayout id="TabLayout">
                {cartoes && cartoes.map(cartao => (
                        <ItemTab
                          setAtivo={setAtivo}
                          active={ativo}
                          key={cartao.id}
                          idItemTab={cartao.id}
                          nome={cartao.nome} />
                    ))}
                </G.TabLayout>
                <G.ImgBtnProximo onClick={() => document.getElementById("TabLayout").scrollLeft += 80} src={SetaProximo} alt="" />
            </G.GroupMenu>
            <S.InfoCartao>
                <G.GroupInfosContaCartao>
                    <p>Limite do Cartão</p>
                    {detalheCartao ?
                        <div style={{color:"#32A287"}}>R$<span>{formatCurrency(detalheCartao.limite)}</span></div>
                        :
                        <div>---------</div>
                    }
                </G.GroupInfosContaCartao>
                <G.GroupInfosContaCartao>
                    <p>Fatura Atual</p>
                    {detalheCartao ?
                        <div style={{color:"#A23232"}}>R$<span>{formatCurrency(detalheCartao.valor)}</span></div>
                        :
                        <div>---------</div>
                    }
                </G.GroupInfosContaCartao>
            </S.InfoCartao>
            <S.DetalhesCartao>
                <div>
                    <p>Vencimento da Fatura</p>
                    {detalheCartao ?
                        <p>{formatDateFull(detalheCartao.vencimento)}</p>
                        :
                        <p>---------</p>
                    }

                </div>
                <div>
                    <p>Status do mês</p>
                    {detalheCartao ?
                        <p style={detalheCartao.pago ? {color:"#32A287"} : {color:"#A23232"}}>{detalheCartao.pago ? "Pago" : "Não Pago"}</p>
                        :
                        <p>---------</p>
                    }

                </div>
                <div>
                    <p>Fechamento da fatura</p>
                    {detalheCartao ?
                        <p>{formatDateFull(detalheCartao.fechamento)}</p>
                        :
                        <p>---------</p>
                    }
                </div>
            </S.DetalhesCartao>

            <S.UltimasAtividades>
                <p className="titulo">Últimas Atividades</p>

                <div
                  style={detalheCartao && detalheCartao.gastos.lenght > 4 ? {overflow: "hidden scroll"} : {overflow: "hidden"}}
                  className="conjuntoItensUltimasAtividades">
                    {
                        detalheCartao && detalheCartao.gastos.lenght > 0 ?
                        detalheCartao.gastos.map(gasto => (

                            counts++ % 2 == 0 ?
                            <ItemUltimasAtividades
                              data={gasto.dataPagamento}
                              descricao={gasto.descricao}
                              categoria={gasto.categoria}/>
                            :
                            <ItemUltimasAtividades
                              data={gasto.dataPagamento}
                              descricao={gasto.descricao}
                              categoria={gasto.categoria} BackGrey/>
                        ))
                        :
                        <GreyPig mensagem="Você não possui atividades!"/>
                    }
                </div>
            </S.UltimasAtividades>
        </S.CartoesWrapper>
        </>
      )
}


function ModalSemCartao({setModal}) {

  return (
    <G.SemWrapper>
        <G.ModalSem>
          <img src={Logo}/>
          <p>Você não possui cartão</p>
          <p>Adicione um cartão agora mesmo!</p>
          <G.Button onClick={() => setModal(true)} color="#32A287">Adicionar cartão</G.Button>
        </G.ModalSem>
    </G.SemWrapper>
  )

}