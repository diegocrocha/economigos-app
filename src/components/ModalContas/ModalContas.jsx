import React from 'react'
import * as S from "./style";
import * as G from "../../styles/globalComponents";
import Input from '../Form/Input/Input'
import api from '../../services/api';
import useForm from '../../hooks/useForm'
import { UserContext } from '../../hooks/UserContext';
import { toast } from 'react-toastify';
import "../../styles/style-toasty.css";
import { Select } from '../Form/Select/Select';
import { getBanks } from '../../services/banks';

export default function ModalContas({ titulo, setModal, edit, idConta }) {

    const { dados, reload } = React.useContext(UserContext);
    const apelido = useForm()
    const descricao = useForm()
    const banco = useForm()
    const [ativa, setAtiva] = React.useState(true);
    const [banks, setBanks] = React.useState(getBanks())

    if (edit) {
        React.useEffect(() => {
            fetchContas();
        }, [dados]);

        async function fetchContas() {
            if (dados) {
                const token = dados.jwt;
                const response = await api.get(`/economigos/contas/${idConta}`, {headers: {
                    'Authorization': `Bearer ${token}`
                }});
                banco.setValue(response.data.banco);
                apelido.setValue(response.data.apelido);
                descricao.setValue(response.data.descricao);
            }
        }
    }

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            setModal(false);
        }
    }

    async function handleSubmit() {
        if (edit) {
            if (dados) {
                const token = dados.jwt;
                const responseG = await api.put(`/economigos/contas/${idConta}`, {
                    banco: banco.value,
                    numeroConta: 0,
                    descricao: descricao.value,
                    apelido: apelido.value
                },
                {headers: {
                    'Authorization': `Bearer ${token}`
                }})
                if (await responseG.status === 200) {
                    toast.success("Conta atualizada com sucesso")
                } else {
                    toast.error("Erro ao atualizar Conta")
                }
            }
        } else {
            if (dados) {
                const token = dados.jwt;
                const responseG = await api.post(`/economigos/contas`, {
                    banco: banco.value,
                    numeroConta: 0,
                    descricao: descricao.value,
                    apelido: apelido.value
                },
                {headers: {
                    'Authorization': `Bearer ${token}`
                }})
                if (await responseG.status === 201) {
                    toast.success("Conta cadastrada com sucesso")
                } else {
                    toast.error("Erro ao cadastrar a Conta")
                }
            }
        }
        reload()
    }

    async function handleDelete() {
        if (dados) {
            const token = dados.jwt;
            const responseG = await api.delete(`/economigos/contas/${idConta}`, 
            {headers: {
                'Authorization': `Bearer ${token}`
            }})
            if (await responseG.status === 200) {
                toast.success("Conta deletada com sucesso")
            } else {
                toast.error("Erro ao deletar conta")
            }
        }
        reload()
    }

    function continuarCadastrando() {
        handleSubmit()
        banco.value = ""
        apelido.value = ""
        descricao.value = ""
    }

    function cadastar() {
        handleSubmit()
        setModal(false)
    }

    function atualizar() {
        handleSubmit()
        setModal(false)
    }

    function deletar() {
        handleDelete()
        setModal(false)
    }

    return (
        <G.WrapperModal onClick={handleOutsideClick}>
            <G.Modal type={"RECEITA"} largura={30} altura={45} marginLeft={35} marginTop={15}>
                <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
                <h1>{titulo}</h1>
                <form className="wrapperInputs">
                    <div className="groupInputs">
                        <span className="divInput">
                          <Select
                            setValue={banco.setValue}
                            value={banco.value}
                            id="banks"
                            label="Categoria"
                            options={banks}
                          />
                        </span>
                        <span className="divInput">
                            <Input
                                label="Apelido"
                                id="apelido"
                                {...apelido} />
                        </span>
                    </div>
                    <div className="groupInputs">
                        <span className="divInput">
                            <Input
                                label="Descrição"
                                id="descricao"
                                {...descricao} />
                        </span>
                        <span className="divInput">
                        </span>
                    </div>
                </form>
                {edit ?
                    <G.GroupButtonsModal style={{ width: "96%", marginLeft: "2%", justifyContent: "space-between" }}>
                        <G.Button onClick={atualizar} style={{ padding: "0" }} color="#32A287">Atualizar</G.Button>
                        <G.Button onClick={deletar} style={{ padding: "0" }} color="#A23232">Excluir</G.Button>
                    </G.GroupButtonsModal>
                    :
                    <G.GroupButtonsModal style={{ marginLeft: "2%" }}>
                        <G.Button onClick={cadastar} style={{ padding: "0" }} color="#32A287">Adicionar</G.Button>
                        <G.SimpleButton onClick={continuarCadastrando} color="#32A287">Adicionar e continuar cadastrando</G.SimpleButton>
                    </G.GroupButtonsModal>
                }
            </G.Modal>
        </G.WrapperModal>
    )
}
