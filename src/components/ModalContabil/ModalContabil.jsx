import React from 'react'
import * as G from '../../styles/globalComponents'
import Input from '../Form/Input/Input'
import { Select } from '../Form/Select/Select';
import useForm from '../../hooks/useForm'
import { UserContext } from '../../hooks/UserContext'
import { toast } from 'react-toastify';
import api from '../../services/api';

export default function ModalContabil({type, color, modal, setModal}) {
  const valor = useForm()
  const data = useForm()
  const descricao = useForm()
  const [conta, setConta] = React.useState("")
  const [categoria, setCategoria] = React.useState("")
  const [contas, setContas] = React.useState(null)
  const [cartoes, setCartoes] = React.useState(null)

  const { dados } = React.useContext(UserContext);

  React.useEffect(() => {
    data.setValue(today());
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [dados])

  async function fetchData() {
    if (dados) {
      const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
      setContas(await response.data.contaDtos);
      setCartoes(await response.data.cartaoDtos);
    }
  }

  function today() {
    const date = new Date().toLocaleDateString('pt-BR');
    return `${date.substr(6,4)}-${date.substr(3,2)}-${date.substr(0,2)}`;
  }

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) {
        setModal(false);
    }
  }

    return (
      <>
        {modal &&
        <G.WrapperModal>
          <G.Modal type={type}>
            <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
            <h1>{type == "RECEITA" ? "Nova Receita" : "Novo Gasto"}</h1>
            <form className="wrapperInputs">
              <div className="groupInputs">
              <Input
                label="Valor"
                type="money"
                {...valor}/>
              <Input
                label="Data"
                type="date"
                {...data}/>
              </div>
              <Input
                className="inputWidth"
                label="Descrição"
                {...descricao}/>
                <div className="groupInputs">
                <Select
                setValue={setConta}
                value={conta}
                label="Conta"
                options={contas.map((conta) => conta.apelido)}/>
              <Select
                setValue={setCategoria}
                value={categoria}
                label="Categoria"
                options={["Alimentação","Transporte"]}/>
                </div>
                </form>
                <G.GroupButtonsModal>
                  <G.Button color={color}>Adicionar</G.Button>
                  <G.SimpleButton color={color}>Adicionar e continuar cadastrando</G.SimpleButton>
                </G.GroupButtonsModal>
          </G.Modal>
        </G.WrapperModal>}
      </>
    )
}
