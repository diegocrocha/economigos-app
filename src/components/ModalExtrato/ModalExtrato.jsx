import React from 'react'
import * as G from '../../styles/globalComponents'
import * as S from "./style";
import LancamentoExtrato from '../LancamentoExtrato/LancamentoExtrato'
import "../../styles/style-toasty.css";
import { toast } from 'react-toastify';
import { UserContext } from '../../hooks/UserContext';
import api from '../../services/api';
import HeaderExtrato from '../HeaderExtrato/HeaderExtrato'
import Download from '../../assets/download.svg'
import GreyPig from '../GreyPig/GreyPig';

export default function ModalExtrato({ color, modal, setModal }) {

    const { dados } = React.useContext(UserContext);
    const [lancamentos, setLancamentos] = React.useState([]);
    let count = 0

    React.useEffect(() => {
        fetchLancamentos()
    }, [dados])

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            setModal(false);
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

    // function downloadExtrato() {
        
    //     api.get(`/economigos/usuarios/lancamentos?idUsuario=${dados.usuario.id}`);
    // }

    return (
        <>
            {modal &&
                <G.WrapperModal onClick={handleOutsideClick}>
                    <G.Modal>
                        <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
                        <S.h1>Extratos</S.h1>
                        <HeaderExtrato />
                        <S.GroupAtividades style={lancamentos.length > 5 ? { overflowY: "scroll" } : { overflowY: "hidden" }}>
                            {lancamentos.length > 0 ?
                                lancamentos.sort((a, b) => b.id - a.id).map(lanc => (
                                    count++ % 2 == 0 ?
                                        <LancamentoExtrato key={lanc.id} descricao={lanc.descricao == "" ? lanc.tipo : lanc.descricao} data={lanc.data.split(" ")[0].replaceAll("-", "/")} categoria={lanc.categoria} BackGrey />
                                        :
                                        <LancamentoExtrato key={lanc.id} descricao={lanc.descricao == "" ? lanc.tipo : lanc.descricao} data={lanc.data.split(" ")[0].replaceAll("-", "/")} categoria={lanc.categoria} />
                                ))
                                :
                                <GreyPig mensagem="Você não possui Lançamentos" />
                            }
                        </S.GroupAtividades>
                        <G.GroupButtonsModal>
                            <G.Button color={"rgb(50,162,135)"}> <a href="" download>Download</a></G.Button>
                        </G.GroupButtonsModal>
                    </G.Modal>
                </G.WrapperModal>
            }
        </>
    )
}
