import React from 'react'
import * as S from "./style";
import * as G from "../../styles/globalComponents";
import Input from '../Form/Input/Input'
import api from '../../services/api';
import useForm from '../../hooks/useForm'
import { UserContext } from '../../hooks/UserContext';
import { toast } from 'react-toastify';
import "../../styles/style-toasty.css";


export default function ModalMetas({ titulo, edit, setModal, idMeta }) {

    const { dados, reload } = React.useContext(UserContext);
    const valorInicial = useForm()
    const valorFinal = useForm()
    const nome = useForm()
    const [ativa, setAtiva] = React.useState(true);

    if (edit) {
        React.useEffect(() => {
            fetchMeta();
        }, [dados]);

        async function fetchMeta() {
            if (dados) {
                const response = await api.get(`/economigos/metas/${idMeta}`);
                nome.setValue(response.data.nome);
                valorFinal.setValue(response.data.valorFinal);
                if (response.data.valorAtual != null) {
                    valorInicial.setValue(response.data.valorAtual);
                } else {
                    valorInicial.setValue(0);
                }
                setAtiva(response.data.ativa)
            }
        }
    }

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            setModal(false);
        }
    }

    async function handleSubmit() {
        if (dados) {
            if (edit) {
                const responseG = await api.put(`/economigos/metas/${idMeta}`, {
                    idUsuario: dados.usuario.id,
                    nome: nome.value,
                    descricao: "",
                    metaGasto: false,
                    valorAtual: Number(valorInicial.value) >= Number(valorFinal.value) ? finalizar() : Number(valorInicial.value),
                    valorFinal: Number(valorFinal.value)
                })
                if (await responseG.status === 200) {
                    toast.success("Meta atualizada com sucesso")
                } else {
                    toast.error("Erro ao atualizar meta")
                }
            } else {
                if (Number(valorInicial.value) >= Number(valorFinal.value)) {
                    toast.error("Saldo Inicial igual ao Valor Final. Cadastre novamente!")
                }
                else{
                    const responseG = await api.post(`/economigos/metas`, {
                        idUsuario: dados.usuario.id,
                        nome: nome.value,
                        descricao: "",
                        metaGasto: false,
                        valorAtual: Number(valorInicial.value),
                        valorFinal: Number(valorFinal.value)
                    })
                    if (await responseG.status === 201) {
                        toast.success("Meta cadastrada com sucesso")
                    } else {
                        toast.error("Erro ao cadastrar a meta")
                    }
                }
            }
        }
        reload()
    }

    function finalizar() {
        handleFinalizar()
        return Number(valorInicial.value);
    }

    function continuarCadastrando() {
        handleSubmit()
        nome.value = ""
        valorInicial.value = 0.00
        valorFinal.value = 0.00
    }

    function cadastar() {
        handleSubmit()
        setModal(false)
    }

    async function handleDelete() {
        if (dados) {
            const responseG = await api.delete(`/economigos/metas/${idMeta}`)
            if (await responseG.status === 200) {
                toast.success("Meta deletada com sucesso")
            } else {
                toast.error("Erro ao deletar meta")
            }
        }
        reload()
    }

    async function handleDesative() {
        if (dados) {
            const responseG = await api.patch(`/economigos/metas/${idMeta}/desativar-ativar`)
            if (await responseG.status === 200) {
                toast.success("Meta desativada com sucesso")
            } else {
                toast.error("Erro ao desativar meta")
            }
        }
        reload()
    }

    async function handleFinalizar() {
        if (dados) {
            const responseG = await api.patch(`/economigos/metas/${idMeta}/finalizar`)
            if (await responseG.status === 200) {
                toast.success("Meta finalizada com sucesso")
            } else {
                toast.error("Erro ao finalizar meta")
            }
        }
        reload()
    }

    function atualizar() {
        handleSubmit()
        setModal(false)
    }

    function deletar() {
        handleDelete()
        setModal(false)
    }

    function desativar() {
        handleDesative()
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
                            <Input
                                className="inputWidth"
                                label="Nome"
                                {...nome} />
                        </span>
                        <span className="divInput">
                            <Input
                                label="Saldo"
                                id="valorInicial"
                                {...valorInicial} />
                        </span>
                    </div>
                    <div className="groupInputs">
                        <span className="divInput">
                            <Input
                                label="Valor Final"
                                id="valorFinal"
                                {...valorFinal} />
                        </span>
                        <span className="divInput">
                        </span>
                    </div>
                </form>
                {edit ?
                    <G.GroupButtonsModal style={{ width: "96%", marginLeft: "2%", justifyContent: "space-between" }}>
                        <G.Button onClick={atualizar} style={{ padding: "0" }} color="#32A287">Atualizar</G.Button>
                        <G.Button onClick={desativar} style={{ padding: "0" }} color="#F5AC37">{ativa ? "Desativar" : "Ativar"}</G.Button>
                        <G.Button onClick={deletar} style={{ padding: "0" }} color="#A23232">Excluir</G.Button>
                    </G.GroupButtonsModal>
                    :
                    <G.GroupButtonsModal style={{ marginLeft: "2%" }}>
                        <G.Button disabled={valorFinal.value == 0 && valorInicial.value == 0 && nome.value == "" ? true : false} onClick={cadastar} style={{ padding: "0" }} color="#32A287">Adicionar</G.Button>
                        <G.SimpleButton disabled={valorFinal.value == 0 && valorInicial.value == 0 && nome.value == "" ? true : false} onClick={continuarCadastrando} color="#32A287">Adicionar e continuar cadastrando</G.SimpleButton>
                    </G.GroupButtonsModal>
                }
            </G.Modal>
        </G.WrapperModal>
    )
}
