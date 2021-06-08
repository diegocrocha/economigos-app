import React from 'react'
import useForm from '../../hooks/useForm';
import { UserContext } from '../../hooks/UserContext';
import * as G from '../../styles/globalComponents'
import Input from '../Form/Input/Input';
import { Select } from '../Form/Select/Select';
import "../../styles/style-toasty.css";

export default function ModalCartoes({modal, setModal}) {
  const limitCard = useForm()
  const faturaAtual = useForm()
  const vencimento = useForm()
  const fechamento = useForm()
  const statusMes = useForm()
  const apelido = useForm()
  const { dados, reload } = React.useContext(UserContext);

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) {
        setModal(false);
    }
  }

  async function handleSubmit() {
    if (dados) {
      const response = await api.post(`/economigos/cartoes`, {
        idUsuario: conta,
        nome: categoria,
        valor: Number(valor.value),
        recebido: true,
        pago: true,
        descricao: descricao.value,
        fixo: false,
        dataPagamento: data.value
      })
      if (await response.status === 201) {
        toast.success("Receita cadastrada com sucesso")
      } else {
        toast.error("Erro ao cadastrar a receita")
      }
    }
  }

  function cadastrar() {

  }

  function continuarCadastrando() {

  }

  return (
    <>
      {modal &&
        <G.WrapperModal onClick={handleOutsideClick}>
          <G.Modal>
            <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
            <h1>Novo Cartão</h1>
            <form className="wrapperInputs">
              <div className="groupInputs">
                <Input
                  label="Limite"
                />
                <Input
                  label="Fatura atual"
                />
              </div>
              <div className="groupInputs">
                <Input
                  label="Vencimento"
                  type="date"/>
                <Input
                  label="Fechamento"
                  type="date" />
              </div>
              <div className="groupInputs">
                <Select
                  label="Status no mês"
                  options={[{id: true, name:"Pago"},{id: false, name: "Não Pago"}]}
                  />
              </div>
            </form>
            <G.GroupButtonsModal>
                  <G.Button color={""} onClick={cadastrar}>Adicionar</G.Button>
                  <G.SimpleButton onClick={continuarCadastrando} color={""}>Adicionar e continuar cadastrando</G.SimpleButton>
                </G.GroupButtonsModal>
          </G.Modal>
        </G.WrapperModal>
      }
    </>
  )
}
