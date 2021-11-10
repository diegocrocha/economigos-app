import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenusApp from "../../components/MenusConjuntoApp/MenusApp";
import TelaCentralApp from '../../components/TelaCentralApp/TelaCentralApp';
import TelaLateralApp from '../../components/TelaLateralApp/TelaLateralApp';
import Cartoes from '../Cartoes';
import Contas from '../Contas';
import Painel from '../Painel';
import Metas from '../Metas';
import { UserContext } from '../../hooks/UserContext';
import api from '../../services/api';
import * as S from './style';
import OlhoAberto from '../../assets/olho-aberto.svg'
import OlhoFechado from '../../assets/olho-fechado.svg'
import Perfil from '../Perfil';

export default function Appi() {

    const { dados } = React.useContext(UserContext);
    const [ativo, setAtivo] = React.useState(true);
    const [contas, setContas] = React.useState([]);
    const [lancamentos, setLancamentos] = React.useState([]);
    const [olho, setOlho] = React.useState(true);

    React.useEffect(() => {
        fetchContas()
        fetchLancamentos()
    }, [dados])

    async function fetchContas() {
        if (dados) {
            const token = dados.jwt;
            const response = await api.get(`/economigos/usuarios/this`, {headers: {
                'Authorization': `Bearer ${token}`
            }});
            setContas(await response.data.contaDtos);
        }
    }

    async function fetchLancamentos() {
        if (dados) {
            const token = dados.jwt;
            const response = await api.get(`/economigos/usuarios/lancamentos`, {headers: {
                'Authorization': `Bearer ${token}`
            }});
            setLancamentos(response.data.contabilUltimasAtividadesDtos)
        }
    }

    function alterarBtn() {
        setOlho(!olho);
        setAtivo(!ativo);
    }

    return (
        <S.Appi>
            <MenusApp />
            <TelaCentralApp>
                <Routes>
                    <Route path="painel" element={<Painel />} />
                    <Route path="contas" element={<Contas />} />
                    <Route path="cartoes" element={<Cartoes />} />
                    <Route path="metas" element={<Metas />} />
                <Route path="perfil" element={<Perfil />} />
                </Routes>
            </TelaCentralApp>
            <S.BtnFecharTela onClick={() => alterarBtn()} src={olho ? OlhoFechado : OlhoAberto}></S.BtnFecharTela>
            <TelaLateralApp fechar={ativo} contas={contas} lancamentos={lancamentos} />
        </S.Appi>
    )
}
