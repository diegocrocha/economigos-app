import React from 'react'
import * as G from '../../styles/globalComponents'
import Input from '../Form/Input/Input'
import { Select } from '../Form/Select/Select';
import useForm from '../../hooks/useForm'
import { UserContext } from '../../hooks/UserContext'
import { toast } from 'react-toastify';
import api from '../../services/api';
import InputReal from '../Form/InputReal';
import { today } from '../../utils/utils';
import "../../styles/style-toasty.css";

export default function ModalContabil({ type, color, modal, setModal }) {
  const valor = useForm()
  const data = useForm()
  const descricao = useForm()
  const [conta, setConta] = React.useState(1)
  const [categoria, setCategoria] = React.useState(1)
  const [categorias, setCategorias] = React.useState(null)
  const [contas, setContas] = React.useState(null)
  const [cartoes, setCartoes] = React.useState(null)
  const [banks, setBanks] = React.useState([])
  const [isCartao, setIsCartao] = React.useState(false)

  const { dados, reload } = React.useContext(UserContext);

  React.useEffect(() => {
    data.setValue(today());
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [dados])

  React.useEffect(() => {
    if (cartoes && contas) {
      filter();
    }
  }, [cartoes, contas])

  async function fetchData() {
    if (dados) {
      const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
      const responseC = await api.get(`/economigos/categorias`)
      setCategorias(filterCategoria(responseC.data))
      setContas(await response.data.contaDtos);
      setCartoes(await response.data.cartaoDtos);
      setConta(await response.data.contaDtos[0].id)
      setCategoria(await responseC.data[0].id)
    }
  }

  function filterCategoria(list) {
    let newArray;
    if (type == "RECEITA") {
      newArray = list.filter(json => json.tipo === "R")
    } else {
      newArray = list.filter(json => json.tipo === "G")
    }
    return newArray
  }

  function filter() {
    let a = contas
    cartoes.map(cartao => {
      a.push(cartao)
    })
    setBanks(a)
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
          let json = isCartao ? {
            idCartao: filterC(conta)
          } : {
            idConta: conta
          }
          const responseG = await api.post(`/economigos/gastos`, {
            ...json,
            idCategoria: categoria,
            gastoCartao: isCartao,
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
      descricao.setValue("")
      valor.setValue(0.00)
      reload()
    }
  }

  function filterC(id) {
    return Number(id.replace("C", ''))
  }

  function cadastrar() {
    handleSubmit()
    setModal(false)
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
            <h1>{type == "RECEITA" ? "Nova Renda" : "Novo Gasto"}</h1>
            <form className="wrapperInputs">
              <div className="groupInputs">
              <Input
                label="Valor"
                id="valor"
                type="number"
                {...valor}/>
              <Input
                label="Data"
                type="date"
                {...data}/>
              </div>
              <Input
                className="inputWidth"
                label="Descrição"
                id="descricao"
                {...descricao}/>
              <div className="groupInputs">
                <Select
                type={type == "RECEITA" ? "CONTAS" : "BANKS"}
                setValue={setConta}
                value={conta}
                setIsCredito={setIsCartao}
                id="contas"
                label="Conta"
                options={type == "RECEITA" ? contas : banks}/>
              <Select
                setValue={setCategoria}
                value={categoria}
                type={"CATEGORIAS"}
                id="categorias"
                label="Categoria"
                options={categorias}/>
                </div>
                </form>
                <G.GroupButtonsModal>
                  <G.Button disabled={false} color={color} onClick={cadastrar}>Adicionar</G.Button>
                  <G.SimpleButton disabled={false} onClick={handleSubmit} color={color}>Adicionar e continuar cadastrando</G.SimpleButton>
                </G.GroupButtonsModal>
          </G.Modal>
        </G.WrapperModal>}
    </>
  )
}
