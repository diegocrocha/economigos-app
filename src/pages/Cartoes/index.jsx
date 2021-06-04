import React from 'react'
import * as G from '../../styles/globalComponents'
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import ItemTab from '../../components/ItemTab/ItemTab';
import SetaProximo from "../../assets/seta-proximo.svg";
import * as S from './style'
import { UserContext } from '../../hooks/UserContext';
import Logo from '../../assets/logo-escuro.svg'
import api from '../../services/api';
import pt from 'date-fns/locale/pt-BR';
import {
    parseISO,
    format,
} from 'date-fns';
import ItemUltimasAtividades from '../../components/ItemUltimasAtividades/ItemUltimasAtividades';
import GreyPig from '../../components/GreyPig/GreyPig';
import Head from '../../components/Helper/Head'
import CartaoColorido from '../../components/LogosSVGComponentes/CartaoColorido/CartaoColorido';


export default function Cartoes() {
    const { dados } = React.useContext(UserContext)
    const [ativo, setAtivo] = React.useState(null)
    const [cartoes, setCartoes] = React.useState(null)
    const [detalheCartao, setDetalheCartao] = React.useState(null);

    React.useEffect(() => {
        fetchCartoes()
    }, [dados])

    React.useEffect(() => {
        if (cartoes != null) {
            if (cartoes.lenght > 0) {
              setAtivo(cartoes[0].id)
            }
        }
    }, [cartoes]);

    React.useEffect(() => {
        fetchData();
    }, [ativo]);

    async function fetchCartoes() {
        if (dados) {
            const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
            setCartoes(await response.data.cartaoDtos);
        }
    }

    async function fetchData() {
        if (ativo) {
            const response = await api.get(`/economigos/cartoes/${ativo}`);
            setDetalheCartao(response.data);
        }
    }

    function formatData(data) {
        return  format(
            parseISO(data),
            "dd 'de' MMMM 'de' yyyy",
            { locale: pt }
          );
    }

    return (
      <>
      {!ativo && <ModalSemCartao />}
      <S.CartoesWrapper className={!ativo ? "animeRight blur" : "animeRight"}>
          <Head title="Cartões"/>
            <G.GroupMenu style={{height: "23%"}}>
                <G.ImgBtnAdicionar src={BotaoAdicionar} alt="" />
                <G.TabLayout id="TabLayout">
                {cartoes && cartoes.map(cartao => (
                        <ItemTab setAtivo={setAtivo} active={ativo} key={cartao.id} idItemTab={cartao.id} nome={cartao.nome} />
                    ))}
                </G.TabLayout>
                <G.ImgBtnProximo src={SetaProximo} alt="" />
            </G.GroupMenu>
            <S.InfoCartao>
                <G.GroupInfosContaCartao>
                    <p>Limite do Cartão</p>
                    {detalheCartao ?
                        <div style={{color:"#32A287"}}>R$<span>{detalheCartao.limite.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span></div>
                        :
                        <div>---------</div>
                    }
                </G.GroupInfosContaCartao>
                <G.GroupInfosContaCartao>
                    <p>Fatura Atual</p>
                    {detalheCartao ?
                        <div style={{color:"#A23232"}}>R$<span>{detalheCartao.valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span></div>
                        :
                        <div>---------</div>
                    }
                </G.GroupInfosContaCartao>
            </S.InfoCartao>
            <S.DetalhesCartao>
                <div>
                    <p>Vencimento da Fatura</p>
                    {detalheCartao ?
                        <p>{formatData(detalheCartao.vencimento)}</p>
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
                        <p>{formatData(detalheCartao.fechamento)}</p>
                        :
                        <p>---------</p>
                    }
                </div>
            </S.DetalhesCartao>

            <S.UltimasAtividades>
                <p className="titulo">Últimas Atividades</p>

                <div style={detalheCartao && detalheCartao.gastos.lenght > 4 ? {overflow: "hidden scroll"} : {overflow: "hidden"}} className="conjuntoItensUltimasAtividades">
                    {
                        detalheCartao ?
                        detalheCartao.gastos.map(gasto => (
                            counts++ % 2 == 0 ?
                            <ItemUltimasAtividades data={gasto.dataPagamento} descricao={gasto.descricao} categoria={gasto.categoria}/>
                            :
                            <ItemUltimasAtividades data={gasto.dataPagamento} descricao={gasto.descricao} categoria={gasto.categoria} BackGrey/>
                        ))
                        :
                        <GreyPig mensagem="Você não tem Atividades"/>
                    }
                </div>
            </S.UltimasAtividades>
        </S.CartoesWrapper>
        </>
      )
}


function ModalSemCartao() {

  return (
    <S.SemCartaoWrapper>
        <S.ModalSemCartao>
          <img src={Logo}/>
          <p>Você não possui cartão</p>
          <p>Adicione um cartão agora mesmo!</p>
          <G.Button color="#32A287">Adicionar cartão</G.Button>
        </S.ModalSemCartao>
    </S.SemCartaoWrapper>
  )

}