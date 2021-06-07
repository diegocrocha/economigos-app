import React from 'react'
import * as G from '../../styles/globalComponents'
import Input from '../Form/Input/Input'
import { Select } from '../Form/Select/Select';
import useForm from '../../hooks/useForm'
import { UserContext } from '../../hooks/UserContext'
import { toast } from 'react-toastify';
import api from '../../services/api';

export default function ModalContabil({ type, color, modal, setModal }) {
  const valor = useForm()
  const data = useForm()
  const descricao = useForm()
  const [conta, setConta] = React.useState(1)
  const [categoria, setCategoria] = React.useState(1)
  const [categorias, setCategorias] = React.useState(null)
  const [contas, setContas] = React.useState(null)
  const [cartoes, setCartoes] = React.useState(null)

  const { dados, reload } = React.useContext(UserContext);

  React.useEffect(() => {
    data.setValue(today());
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [dados])

  async function fetchData() {
    if (dados) {
      const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
      const responseC = await api.get(`/economigos/categorias`)
      setCategorias(await responseC.data)
      setContas(await response.data.contaDtos);
      setCartoes(await response.data.cartaoDtos);
      setConta(await response.data.contaDtos[0].id)
      setCategoria(await responseC.data[0].id)
    }
  }


  async function handleSubmit() {
    if (dados) {
      switch (type) {
        case "RECEITA":
          const response = await api.post(`/economigos/rendas`, {
            idConta: conta,
            idCategoria: categoria,
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
          break;
        case "GASTO":
          const responseG = await api.post(`/economigos/gastos`, {
            idConta: conta,
            idCategoria: categoria,
            gastoCartao: false,
            valor: Number(valor.value),
            pago: true,
            descricao: descricao.value,
            fixo: false,
            dataPagamento: data.value
          })
          if (await responseG.status === 201) {
            toast.success("Gasto cadastrado com sucesso")
          } else {
            toast.error("Erro ao cadastrar o gasto")
          }
          break;
      }
      reload()
    }
  }

  function continuarCadastrando() {
    handleSubmit()
    descricao.value = ""
    valor.value = 0.00
  }

  function cadastar() {
    handleSubmit()
    setModal(false)
  }

  function today() {
    const date = new Date().toLocaleDateString('pt-BR');
    return `${date.substr(6, 4)}-${date.substr(3, 2)}-${date.substr(0, 2)}`;
  }

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  return (
    <>
      {modal &&
        <G.WrapperModal onClick={handleOutsideClick}>
          <G.Modal type={type}>
            <G.ButtonClose onClick={() => setModal(false)}>X</G.ButtonClose>
            <h1>{type == "RECEITA" ? "Nova Receita" : "Novo Gasto"}</h1>
            <form className="wrapperInputs">
              <div className="groupInputs">
                <Input
                  label="Valor"
                  id="valor"
                  {...valor} />
                <Input
                  label="Data"
                  type="date"
                  {...data} />
              </div>
              <Input
                className="inputWidth"
                label="Descrição"
                {...descricao} />
              <div className="groupInputs">
                <Select
                  type="CONTAS"
                  setValue={setConta}
                  value={conta}
                  label="Conta"
                  options={contas} />
                <Select
                  setValue={setCategoria}
                  value={categoria}
                  label="Categoria"
                  options={categorias} />
              </div>
            </form>
            <G.GroupButtonsModal>
              <G.Button color={color} onClick={cadastar}>Adicionar</G.Button>
              <G.SimpleButton onClick={continuarCadastrando} color={color}>Adicionar e continuar cadastrando</G.SimpleButton>
            </G.GroupButtonsModal>
          </G.Modal>
        </G.WrapperModal>}
    </>
  )
}
