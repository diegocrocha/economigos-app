import React from 'react'
import useForm from '../../hooks/useForm';
import api from '../../services/api';
import { UserContext } from '../../hooks/UserContext';
import * as G from '../../styles/globalComponents'
import Input from '../Form/Input/Input';
import { Select } from '../Form/Select/Select';
import { toast } from 'react-toastify';
import "../../styles/style-toasty.css";

export default function ModalCartoes({ modal, setModal, edit, idCartao }) {

  const { dados, reload } = React.useContext(UserContext);
  const limitCard = useForm()
  const faturaAtual = useForm()
  const vencimento = useForm()
  const fechamento = useForm()
  const statusMes = useForm()
  const apelido = useForm()

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  async function handleSubmit() {
    if (dados) {
      const response = await api.post(`/economigos/cartoes`, {
        idUsuario: dados.usuario.id,
        nome: apelido.value,
        fechamento: fechamento.value,
        vencimento: vencimento.value,
        pago: statusMes.value,
        limite: Number(limitCard.value)

      })
      if (await response.status === 201) {
        toast.success("Cartão cadastrado com sucesso")
      } else {
        toast.error("Erro ao cadastrar cartão")
      }
    }
    reload()
  }

  function cadastrar() {
    handleSubmit()
    setModal(false)
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
                  type="number"
                  {...limitCard}
                />
                <Input
                  label="Nome"
                  id="apelido"
                  {...apelido}
                />
              </div>
              <div className="groupInputs">
                <Input
                  label="Vencimento"
                  type="date"
                  {...vencimento} />
                <Input
                  label="Fechamento"
                  type="date"
                  {...fechamento} />
              </div>
              <div className="groupInputs">
                <Select
                  setValue={statusMes.setValue}
                  label="Status no mês"
                  options={[{ id: true, name: "Pago" }, { id: false, name: "Não Pago" }]}
                  {...statusMes}
                />
              </div>
            </form>
            <G.GroupButtonsModal>
              <G.Button color={"rgb(50, 162, 135)"} onClick={cadastrar}>Adicionar</G.Button>
              <G.SimpleButton onClick={handleSubmit} color={"rgb(50, 162, 135)"}>Adicionar e continuar cadastrando</G.SimpleButton>
            </G.GroupButtonsModal>
          </G.Modal>
        </G.WrapperModal>
      }
    </>
  )
}
