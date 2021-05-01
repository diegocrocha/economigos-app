import React from 'react'
import SaldoTotal from "../../components/SaldoTotal/SaldoTotal"
import GastosPorCategoria from "../../components/GastosPorCategoria/GastosPorCategoria"
import BalancoMensal from "../../components/BalancoMensal/BalancoMensal"
import { UserContext } from '../../hooks/UserContext'
import api from '../../services/api'


function Painel() {
  const {dados} = React.useContext(UserContext);
  const [saldo, setSaldo] = React.useState(null);
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (info != null) {
      setSaldo(info.valorAtual)
    }
  }, [info])
  
  async function fetchData() {
    if (dados) {
      const response = await api.get(`/economigos/usuarios/${dados.usuario.id}`);
      setInfo(await response.data);
    }
  }
  
  return (
    <>
        <SaldoTotal saldo={saldo != null && saldo}/>
        <GastosPorCategoria/>
        <BalancoMensal/>
    </>
  )
}

export default Painel;