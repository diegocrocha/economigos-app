import React from 'react'
import * as G from '../../styles/globalComponents'
import BotaoAdicionar from "../../assets/botao-adicionar.svg";
import ItemTab from '../../components/ItemTab/ItemTab';
import SetaProximo from "../../assets/seta-proximo.svg";
import * as S from './style'
import { UserContext } from '../../hooks/UserContext';
import api from '../../services/api';

import { 
    parseISO, 
    format
  } from 'date-fns';

// import pt from 'date-fns/locales/pt';

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
            setAtivo(cartoes[0].id)
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
            "dd 'de' MMMM 'de' yyyy"
          );
    }

    return (
        <S.CartoesWrapper className="animeRight">
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
                    <div>R$<span>{detalheCartao && detalheCartao.limite}</span></div>
                </G.GroupInfosContaCartao>
                <G.GroupInfosContaCartao>
                    <p>Fatura Atual</p>
                    <div>R$<span>{detalheCartao && detalheCartao.valor}</span></div>
                </G.GroupInfosContaCartao>
            </S.InfoCartao>
            <S.DetalhesCartao>
                <div>
                    <p>Vencimento da Fatura</p>
                    <p>{detalheCartao && formatData(detalheCartao.vencimento)}</p>
                </div>
                <div>
                    <p>Status do mês</p>
                    <p>{detalheCartao && detalheCartao.pago.toString()}</p>
                </div>
                <div>
                    <p>Fechamento da fatura</p>
                    <p>{detalheCartao && formatData(detalheCartao.fechamento)}</p>
                </div>
            </S.DetalhesCartao>
        </S.CartoesWrapper>
    )
}
